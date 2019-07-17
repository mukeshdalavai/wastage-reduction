package com.stackroute.service;

import com.stackroute.domain.*;
import com.stackroute.rabbitmq.model.CharityStatus;
import com.stackroute.rabbitmq.model.RatedRestaurant;
import com.stackroute.repository.CharityRepository;
import com.stackroute.repository.CharityLiveStatusRepository;
import com.stackroute.repository.SequenceRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.rmi.runtime.Log;

import java.util.ArrayList;
import java.util.List;
@Service
public class CharityServiceImpl implements CharityService {

    @Autowired
    CharityRepository charityRepository;

    @Autowired
    CharityLiveStatusRepository charityLiveStatusRepository;

    @Autowired
    SequenceRepository sequenceRepository;

    @Autowired
    SendRating sendRating;

    public CharityServiceImpl(){}

    public CharityServiceImpl(CharityRepository charityRepository){this.charityRepository = charityRepository;}

    @Override
    public Charity saveCharityLogs(String username) throws Exception {
        Charity charity = new Charity();
        List<Logs> logsList = new ArrayList<>();
        SequenceGenerator sequenceGenerator = new SequenceGenerator("",0);
        try {
            charity = charityRepository.findById(username).get();
            sequenceGenerator = sequenceRepository.findById(username).get();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        if (charity.getUsername() != null) {
            logsList = charity.getLogs();
        }
         CharityLiveStatus charityLiveStatus = charityLiveStatusRepository.findById(username).get();
        Logs logs = charityLiveStatus.getLogs();
        logs.setId(sequenceGenerator.getCount());
        sequenceGenerator.setUsername(username);
        sequenceGenerator.setCount(sequenceGenerator.getCount()+1);
        sequenceRepository.save(sequenceGenerator);
        logsList.add(logs);
        charity.setUsername(username);
        charity.setLogs(logsList);
        return charityRepository.save(charity);
    }

    @Override
    public Charity fetchCharity(String username) {
        return charityRepository.findById(username).get();
    }

    @Override
    public List<Charity> displayCharityLogs() {
        return charityRepository.findAll();
    }

    @Override
    public CharityLiveStatus fetchCharityStatus(String username) {
        return charityLiveStatusRepository.findById(username).get();
    }

    @Override
    public String saveRating(Rating rating) {
        Charity charity = charityRepository.findById(rating.getUsername()).get();
        List<Logs> logsList = charity.getLogs();
        for (int i = 0; i < logsList.size(); i++){
            Logs logs = logsList.get(i);
            if(rating.getLogId()==logs.getId()){
                logs.setRating(rating.getRating());
                logsList.set(i,logs);
                List<String> restaurantIds = logs.getCharityStatus().getRestaurantIds();
                List<RatedRestaurant> ratedRestaurants = new ArrayList<>();
                for ( int j = 0; j < restaurantIds.size(); j++){
                    RatedRestaurant ratedRestaurant = new RatedRestaurant(restaurantIds.get(j),rating.getLogId(),rating.getRating());
                    ratedRestaurants.add(ratedRestaurant);
                }
                sendRating.sendToRestaurantLogs(ratedRestaurants);
            }
        }
        charity.setLogs(logsList);
        charityRepository.save(charity);
        return null;
    }
}
