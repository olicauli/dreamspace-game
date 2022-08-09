//const { Phaser } = require("../phaser");

export default class Space extends Phaser.Scene 
{
    constructor()
    {
        super('space');
        this.player = null;
        this.cursors = null;
    }

    preload()
    {
        this.load.image('floor', 'assets/test-floor.png');
        this.load.spritesheet('avatar', 'assets/avatarsheet.png',
        {frameWidth: 32, frameHeight: 32});
    }

    create()
    {
        this.add.image(0, 0, 'floor').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, 500, 500);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.centerOn(0, 0);
        //const text = this.add.text(360, 500).setText(`x: ${this.cameras.main.scrollX}, y: ${this.cameras.main.scrollY}`);
        //text.setShadow(1, 1, '#000000', 2);


        //***PLAYER STUFF***
        this.player = this.physics.add.sprite(400, 200, 'avatar');
        this.player.setScale(2);
        this.player.setCollideWorldBounds(true);
        //this.player.body.allowGravity = false;

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('avatar', {frames: [0, 1, 2, 3]}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('avatar', {frames: [4, 5, 6, 7]}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('avatar', {frames: [8, 9, 10, 11]}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('avatar', {frames: [12, 13, 14, 15]}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create ({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('avatar', {frames: [0]}),
            frameRate: 20,
            repeat: -1
        })

        this.cursors = this.input.keyboard.createCursorKeys();
        //this.cameras.main.startFollow(this.)
    }

    update()
    {
        this.cameras.main.centerOn(this.player.x, this.player.y);
        //this.cameras.main.startFollow(this.player, true);

        //rrgghh shouldnt this be a switch case statement??
        if (this.cursors.up.isDown)
        {
            this.player.setVelocity(0, -100);
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocity(0, 100);
            this.player.anims.play('down', true);
        }
        else if (this.cursors.left.isDown)
        {
            this.player.setVelocity(-100, 0);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocity(100, 0);
            this.player.anims.play('right', true);
        }
        else 
        {
            this.player.setVelocity(0);
            this.player.anims.pause();
        }
    }

}