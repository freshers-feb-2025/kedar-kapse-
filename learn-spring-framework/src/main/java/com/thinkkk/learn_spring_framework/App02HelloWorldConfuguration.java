package com.thinkkk.learn_spring_framework;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class App02HelloWorldConfuguration {

    @Bean
    public String name(){
        return "Kedar Kapse";
    }

    @Bean
    public int age(){
        return 23;
    }
}
