//const { Phaser } = require("./phaser");

//import { TestGame } from "testgamescene.js";

import Preloader from './scenes/Preloader.js';
import Space from './scenes/Space.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene: [Preloader, Space]
};

let game = new Phaser.Game(config);

