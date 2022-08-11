import floor from '../assets/img/test-floor.png';
import door from '../assets/img/door.png';
import avatar from '../assets/img/spritesheets/avatar.png';
import arrowkeys from '../assets/img/spritesheets/arrowkeys.png';

import avatarjson from '../assets/img/spritesheets/avatar.json';
import arrowkeysjson from '../assets/img/spritesheets/arrowkeys.json'

import bap from '../assets/audio/bap.wav';
import bgm from '../assets/audio/magicforest.mp3';

export default class Preloader extends Phaser.Scene 
{
    constructor()
    {
        super('Preloader');
    }
    preload()
    {
        this.load.image('floor', floor);
        this.load.image('door', door);

        this.load.atlas('avatar', avatar, avatarjson);
        this.load.atlas('arrowkeys', arrowkeys, arrowkeysjson);

        this.load.audio('test-sfx', bap);
        this.load.audio('bgm', bgm);
    }
    create()
    {
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('avatar', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('avatar', {start: 8, end: 11}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('avatar', {start: 4, end: 7}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('avatar', {start: 12, end: 15}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create ({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('avatar', {frame: 0}),
            frameRate: 20,
            repeat: -1
        })
        
        this.scene.start('Space');
    }
}