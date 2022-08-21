'use strict'

import BaseScene from "./baseScene.js";


export default class Scene2 extends BaseScene {
    create() {
        super.create()

        this.text = 'Score: '
        this.score = 0
        this.scoreText = this.add.text(150, 10, this.text + this.score, {
            fontFamily: 'Neucha',
            fontSize: '32px',
            fill: 'gold'
        });
    }
}