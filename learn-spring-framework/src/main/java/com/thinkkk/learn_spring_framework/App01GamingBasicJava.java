package com.thinkkk.learn_spring_framework;

import com.thinkkk.learn_spring_framework.game.GameRunnner;
import com.thinkkk.learn_spring_framework.game.MarioGame;

public class App01GamingBasicJava {
    public static void main(String[] args) {

        var marioGame = new MarioGame();
        var gameRunner = new GameRunnner(marioGame);
        gameRunner.run();
    }
}
