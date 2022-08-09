//const { Phaser } = require("./phaser");

//import { TestGame } from "testgamescene.js";

import Space from './scenes/space.js';

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
    scene: [Space]
};

var game = new Phaser.Game(config);

