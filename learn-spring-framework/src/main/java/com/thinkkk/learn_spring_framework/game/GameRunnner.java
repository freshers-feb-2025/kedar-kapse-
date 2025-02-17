package com.thinkkk.learn_spring_framework.game;

public class GameRunnner {

    MarioGame game;
    public GameRunnner(MarioGame marioGame) {
        this.game=marioGame;
    }

    public void run(){
        System.out.println("Running Game .... "+game);
        game.up();
        game.down();
        game.left();
        game.right();
    }
}
