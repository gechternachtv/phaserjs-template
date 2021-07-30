import Phaser from "phaser"
import testscene from "./scenes/test-scene/test-scene"
console.log(Phaser)


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {debug: true}
    },
    scene: [testscene]
}

window.addEventListener("load",()=>{
    const game = new Phaser.Game(config)
})

