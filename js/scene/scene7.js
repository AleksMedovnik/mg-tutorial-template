'use strict'

import Scene6 from "./scene6.js";


export default class Scene7 extends Scene6 {
    create() {
        super.create()

        this.score = 0
        for (let i = 0, y = 50, d = 1; i < this.coinChildren.length; y -= 5, i++, d = i + 1) {
            let coin = this.coinChildren[i];

            this.physics.add.overlap(this.hero, coin, () => {
                coin.destroy();
                this.score++;
                this.scoreText.setText(`${this.scoreText} ${this.score}`);
            });
        }
    }
}