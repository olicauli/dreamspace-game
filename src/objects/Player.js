export default class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y)
    {
        super(scene, x, y, 'avatar');
        scene.physics.add.existing(this);
        scene.add.existing(this); //do not remove this line or the one above
                                  //if u do my poor boy goes completley invisible
        this.setScale(2);
        this.setSize(12, 24); //sets the hitbox size
        //this.setOffset(10, 24);
        this.setCollideWorldBounds(true);
        this.touching = false;
    }

    setTouching()
    {
        this.touching = true;
    }

    idle()
    {
        this.setVelocity(0);
        this.anims.pause();
    }
    
    moveUp()
    {
        this.setVelocity(0, -100);
        this.anims.play('up', true);
    }
    moveDown()
    {
        this.setVelocity(0, 100);
        this.anims.play('down', true);
    }
    moveLeft()
    {
        this.setVelocity(-100, 0);
        this.anims.play('left', true);
    }
    moveRight()
    {
        this.setVelocity(100, 0);
        this.anims.play('right', true);
    }

    interact(sfx)
    {
        sfx.play();
    }

    movement(cursors)
    {
        if (cursors.up.isDown)
        {
            this.moveUp();
        }
        else if (cursors.down.isDown)
        {
            this.moveDown();
        }
        else if (cursors.left.isDown)
        {
            this.moveLeft();
        }
        else if (cursors.right.isDown)
        {
            this.moveRight();
        }
        else 
        {
            this.idle();
        }
    }
}