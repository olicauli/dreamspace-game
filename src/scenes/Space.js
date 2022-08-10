//oh god i need to put the avatar in its own file
import Player from '../objects/Player.js';
export default class Space extends Phaser.Scene 
{
    constructor()
    {
        super('Space');
        this.player = null;
        this.cursors = null;
    }

    create()
    {
        this.add.image(0, 0, 'floor').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, 800, 600);
        this.cameras.main.setZoom(1.5);
        //const text = this.add.text(360, 500).setText(`x: ${this.cameras.main.scrollX}, y: ${this.cameras.main.scrollY}`);
        //text.setShadow(1, 1, '#000000', 2);


        //***PLAYER STUFF***
        this.player = new Player(this, 400, 200);
        //let bingus = this.physics.add.sprite(400, 200, 'avatar');
        //console.log(bingus);
        /*
        this.player = this.physics.add.sprite(400, 200, 'avatar');
        this.player.setScale(2);
        this.player.setCollideWorldBounds(true);
        */
        
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        //this.cameras.main.centerOn(this.player.x, this.player.y);
        

        //rrgghh shouldnt this be a switch case statement??
        if (this.cursors.up.isDown)
        {
            this.player.moveUp();
            //this.player.setVelocity(0, -100);
            //this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.moveDown();
            //this.player.setVelocity(0, 100);
            //this.player.anims.play('down', true);
        }
        else if (this.cursors.left.isDown)
        {
            this.player.moveLeft();
            //this.player.setVelocity(-100, 0);
            //this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.moveRight();
            //this.player.setVelocity(100, 0);
            //this.player.anims.play('right', true);
        }
        else 
        {
            this.player.idle();
        }
    }

}