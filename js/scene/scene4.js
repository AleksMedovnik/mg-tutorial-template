'use strict'

import Scene3 from "./scene3.js";


export default class Scene4 extends Scene3 {
    update() {
        super.update()

        if (this.cursor.right.isDown) {
            this.hero.setVelocityX(300);
            this.hero.setFlipX(false);
        } else {
            this.hero.setVelocityX(0);
        }
    }
}