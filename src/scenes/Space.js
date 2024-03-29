import Player from '../objects/Player.js';
export default class Space extends Phaser.Scene 
{
    constructor()
    {
        super('Space');
        this.player = null;
        this.cursors = null;
        this.overlapped = false;
        this.testSfx;
        this.counter = 0;
        this.interactKey;
    }

    create()
    {
        this.add.image(0, 0, 'floor').setOrigin(0, 0);

        //draws a little border around the background
        let graphics = this.add.graphics();
        let thickness = 4;
        let color = 0x000000;
        let alpha = 1;
        graphics.lineStyle(thickness, color, alpha);
        graphics.strokeRect(0, 0, 800, 600);

        //audio stuff
        this.testSfx = this.sound.add('test-sfx');
        let bgm = this.sound.add('bgm');
        bgm.pauseOnBlur = false; //doenst seem to change anything but theres no reason for this
                                 //to be wrong... Hmmm
        bgm.play({
            loop: true,
            volume: 0.2,
        });

        //create the objects around the map
        //note: shouldnt there be a better way to do this? Hrmm...
        let obstacle = this.physics.add.staticGroup();
        obstacle.create(740, 300, 'door').setScale(2);
        obstacle.create(60, 200, 'door').setScale(2).setFlipX(true);
        obstacle.create(400, 60, 'door').setScale(2);
        //obstacle.create(250, 50, 'arrowkeys', 0).setImmovable(true);
        //obstacle.create(200, 320, 'arrowkeys', 1);
        //obstacle.create(570, 370, 'arrowkeys', 2);
        //obstacle.create(560, 130, 'arrowkeys', 3);

        this.add.text(365, 360, 'welcome.');
        this.add.text(220, 470, "there isn't much here yet, but please,");
        this.add.text(290, 520, "make yourself at home.");

        //player, collider, cameras, input
        this.player = new Player(this, 400, 200);
        
        this.physics.add.collider(this.player, obstacle, (player)=>
        {
            player.touching = true;
        });

        this.cameras.main.setBounds(0, 0, 800, 600);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.startFollow(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.interactKey = this.input.keyboard.addKey('Z');
    }

    update()
    {
        //temporary testing interact function;
        //there's probably something built in in phaser that works
        //better, but i haven't wrangled it out of the docs and examples yet
        if (this.player.touching && this.interactKey.isDown)
        {
            this.testSfx.play();
            this.player.touching = false;
        }
        this.player.movement(this.cursors);
    }

}