package com.thinkkk.learn_spring_framework;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App02HelloWorldSpringBeanExample {
    public static void main(String[] args) {
        //Launch a spring context
        //configure the things that we want from the spring framework

        var context=
           new AnnotationConfigApplicationContext(App02HelloWorldConfuguration.class);

        //Retringving Beans That Mannaged By Spring..
        System.out.println(context.getBean("name"));
        System.out.println(context.getBean("age"));
    }
}
