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

        this.player = new Player(this, 400, 200);
        //let bingus = this.physics.add.sprite(400, 200, 'avatar');
        //console.log(bingus);
        
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        //rrgghh shouldnt this be a switch case statement??
        if (this.cursors.up.isDown)
        {
            this.player.moveUp();
        }
        else if (this.cursors.down.isDown)
        {
            this.player.moveDown();
        }
        else if (this.cursors.left.isDown)
        {
            this.player.moveLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.player.moveRight();
        }
        else 
        {
            this.player.idle();
        }
    }

}