'use strict'

import Scene4 from "./scene4.js";


export default class Scene5 extends Scene4 {
    update() {
        super.update()

        if (this.cursor.right.isDown) {
            this.hero.setVelocityX(300);
            this.hero.setFlipX(false);
        } else if (this.cursor.left.isDown) {
            this.hero.setVelocityX(-300);
            this.hero.setFlipX(true);
        } else {
            this.hero.setVelocityX(0);
        }
    }
}