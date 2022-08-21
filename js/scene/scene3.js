'use strict'

import Scene2 from "./scene2.js";


export default class Scene3 extends Scene2 {
    create() {
        super.create()
        
        this.score = 1
    }
    update(){
        super.update()
        this.scoreText.setText(this.text + this.score);
    }
}