var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () //loads the stuff we need
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', 
    {frameWidth: 32, frameHeight: 48});
}

function create () //creates objects and stuff on screen from
                   //things in preload
{
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    //this.add.image(400, 300, 'star');

    //PLATFOMS CODE
    //staticGroup is a static physics group;
    //simply has a position and size, cant be touched by gravity,
    //doesnt have a velocity on it upon collision, never moves
    platforms = this.physics.add.staticGroup();
    //platforms is a group. game objects belonging to this
    //group are made using .create
    //physics group will automatically create physics enabled
    //children
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    //refreshBody requred bc we have changed the scale of the physics body
    platforms.create (600, 400, 'ground');
    platforms.create(50, 250, 'ground')
    platforms.create(750, 220, 'ground');


    //STAR CODE
    stars = this.physics.add.group({
       key: 'star', //the texture key; any children will be given the start
                    //texture by default
       repeat: 11, //12 total stars (1 is create automatically)
       setXY: {x: 12, y: 0, stepX: 70} //set the position of the 12 children. add 70 to x position
                                       //each star
    });

    stars.children.iterate(function (child) { //for every child star
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); //set a random bounce value between 0.4 and 0.8
    });

    //PLAYER CODE
    //since player is created with the physics game object factory,
    //it has dynamic physics by default
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2); //gives it a slight bounce when lands
    player.setCollideWorldBounds(true); //self explanatory

    //PLAYER ANIMATION CODE
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3}),
            frameRate: 10,
            repeat: -1 //-1 means the animation loops
    });
    this.anims.create({
        key: 'turn',
        frames: [{key: 'dude', frame: 4}],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8}),
            frameRate: 10,
            repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    //COLLISION CHECKING
    //creates a collider object.
    //this object monitors two physics objects and
    //checks for collisions or overlap between them
    this.physics.add.collider(player, platforms);
    //since platforms is a group, it checks collisions
    //for all group objects
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    var score = 0;
    var scoreTest;

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});

    function collectStar (player, star)
    {
        star.disableBody(true, true); //physics body disabled and game object inactive & invisible
        score += 10;
        scoreText.setText(`Score: ${score}`);
    }
    
}   

function update ()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else 
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}