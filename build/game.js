"use strict";
class Game {
    static init() {
        App.canvas.onclick = () => {
            Graphics.drawCircle(Input.mouseX, Input.mouseY, 10, `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`);
        };
    }
    static gameLoop(dt) {
    }
    static draw() {
    }
}
