//const { Phaser } = require("./phaser");

//import { TestGame } from "testgamescene.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene: [SceneOne]
};

var game = new Phaser.Game(config);

