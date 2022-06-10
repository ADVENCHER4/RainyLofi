import { Rain } from "./rain.js";
import { settings } from "./values.js";

var rain = new Rain();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function clear() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
export function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = settings["color"];
    ctx.lineWidth = settings["width"];

}
export function redrawRain() {
    clear();
    for (var i = 0; i < rain.drops.length; i++) {
        var drop = rain.drops[i];
        var offset = drop.length * Math.sin(settings["angle"] * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + offset, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;
        drop.x += offset /(drop.speed * 2 / 3);
        if (drop.x < 0) {
            drop.x += canvas.width;
        } else if (drop.x > canvas.width) {
            drop.x -= canvas.width;
        }
        if (drop.y >= canvas.height) {
            rain.deleteDrop(i);
        }

    }
    rain.createDrops();
}
