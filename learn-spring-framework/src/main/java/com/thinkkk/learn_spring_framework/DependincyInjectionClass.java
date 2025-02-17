package com.thinkkk.learn_spring_framework;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@ComponentScan
class YourBusnessClass {

    @Autowired
    Dependincy1 dependincy1;

    @Autowired
    Dependincy2 dependincy2;

    public String toString(){
        return " "+dependincy1+" "+dependincy2;
    }
}

@Component
class Dependincy1{

}

@Component
class Dependincy2 {

}
@Configuration
@ComponentScan
public class DependincyInjectionClass {

    public static void main(String[] args) {

        try(var context = new AnnotationConfigApplicationContext(DependincyInjectionClass.class)) {
            Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
            System.out.println(context.getBean(YourBusnessClass.class));
        }
    }
}
