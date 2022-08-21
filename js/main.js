'use strict'

import { getConfig } from "./config.js";
import BaseScene from "./scene/baseScene.js";
import Scene2 from "./scene/scene2.js";
import Scene3 from "./scene/scene3.js";
import Scene4 from "./scene/scene4.js";
import Scene5 from "./scene/scene5.js";
import Scene6 from "./scene/scene6.js";
import Scene7 from "./scene/scene7.js";
import Scene8 from "./scene/scene8.js";


const config = getConfig()
config.scene = [Scene4]
new Phaser.Game(config);