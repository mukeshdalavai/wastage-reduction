package com.stackroute.registrationserver.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CharityProfile {

        @Id
        private String username;
        private String email;
        private String role;
        private String charityName;
        private long mobile;
        private String address;
        private String location;
        private long foodRequirement;
        private String certificateNo;
        private String certificateName;
}


