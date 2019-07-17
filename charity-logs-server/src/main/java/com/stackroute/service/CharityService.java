package com.stackroute.service;

import com.stackroute.domain.Charity;
import com.stackroute.domain.CharityLiveStatus;
import com.stackroute.domain.Rating;
import com.stackroute.rabbitmq.model.CharityStatus;

import java.util.List;

public interface CharityService {
    public Charity saveCharityLogs(String username) throws Exception;

    public List<Charity> displayCharityLogs();

    public Charity fetchCharity(String username);

    public CharityLiveStatus fetchCharityStatus(String username);

    public String saveRating(Rating rating);
}
