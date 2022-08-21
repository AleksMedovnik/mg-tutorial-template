'use strict'

import Scene7 from "./scene7.js";


export default class Scene8 extends Scene7 {
    create() {
        super.create()

        for (let i = 0, x = 50, y = 240, dx = 130, dy = 110; i < 6; x += dx, y += dy, dy = -dy, i++) {
            this.createPlatform(x, y);
        }
    }
}