class Scene1 extends Phaser.Scene {
    constructor(){
        super({key:"Scene1"});
    }



    preload () {

     this.load.image('sky', '../assets/sky.png');
    
    }



create(){
    
     this.add.image(400, 300, 'sky');
     
}




} // End of Scene1 Class