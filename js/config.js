'use strict'

export const getConfig = () => ({
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    parent: document.getElementById('canvas'),
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
})