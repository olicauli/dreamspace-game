import floor from '../assets/test-floor.png';
import door from '../assets/door.png';
import avatar from '../assets/avatar.png';
import arrowkeys from '../assets/arrowkeys.png';

import avatarjson from '../assets/avatar.json';
import arrowkeysjson from '../assets/arrowkeys.json'

import bap from '../assets/bap.wav';
import bgm from '../assets/magicforest.mp3';

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
        /*
        this.load.spritesheet('arrowkeys', 'src/assets/keysheet.png', 
        {frameWidth: 31.5, frameHeight: 28});
        */
        /*
        this.load.spritesheet('avatar', 'src/assets/avatarsheet.png',
        {frameWidth: 32, frameHeight: 32});
        */
        this.load.atlas('avatar', avatar, avatarjson);
        this.load.atlas('arrowkeys', arrowkeys, arrowkeysjson);
        console.log(this.textures.get('avatar').getFrameNames());

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
        
        //console.log(this.scene);
        this.scene.start('Space');
    }
}