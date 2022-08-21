'use strict'

import Scene5 from "./scene5.js";


export default class Scene6 extends Scene5 {
    update() {
        super.update()

        // Hero Controls
        if (this.cursor.up.isDown && this.hero.body.touching.down) {
            this.hero.setVelocityY(-420);
        } else if (this.cursor.left.isDown) {
            this.hero.setVelocityX(-300);
            this.hero.setFlipX(true);
        } else if (this.cursor.right.isDown) {
            this.hero.setVelocityX(300);
            this.hero.setFlipX(false);
        } else {
            this.hero.setVelocityX(0);
        }
    }
}