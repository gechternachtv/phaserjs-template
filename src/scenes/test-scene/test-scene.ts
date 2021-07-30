
import Phaser from 'phaser'


export default class HelloWorldScene extends Phaser.Scene {
    constructor(){
        super("super!")
        console.log("test-scene")
    }

    preload(){
        this.load.image('magicSheet', 'magicSheet.png')
    }

    create(){
        this.add.image(400, 300, 'magicSheet')
    }

    update(dt:integer){
        
    }
}