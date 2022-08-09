//const { Phaser } = require("./phaser");

//import { TestGame } from "testgamescene.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
    scene: [SceneOne]
};

var game = new Phaser.Game(config);

