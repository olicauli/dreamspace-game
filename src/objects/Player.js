export default class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y)
    {
        super(scene, x, y, 'avatar');
        scene.physics.add.existing(this);
        this.setScale(2);
        this.setCollideWorldBounds(true);
        //this.cursors = this.scene.input.keyboard.createCursorKeys();
        return this;
    }
/*
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
        this.setVelocity(100, 0);
        this.anims.play('left', true);
    }
    moveRight()
    {
        this.setVelocity(-100, 0);
        this.anims.play('right', true);
    }
    */
}