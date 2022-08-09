//const { Phaser } = require("../phaser");

class SceneOne extends Phaser.Scene 
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('floor', 'assets/test-floor.png');
    }

    create()
    {
        this.add.image(0, 0, 'floor').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, 500, 500);
        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, 0);
        const text = this.add.text(360, 500).setText(`x: ${this.cameras.main.scrollX}, y: ${this.cameras.main.scrollY}`);
        text.setShadow(1, 1, '#000000', 2);

        //this.cameras.main.startFollow(this.)
    }

    update()
    {
    }

}