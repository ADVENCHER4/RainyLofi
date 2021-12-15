import {Rain} from "./rain.js";


var rain = new Rain();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "cyan";
ctx.lineWidth = 4;


function clear(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
var y = 0;
setInterval(function() {
    console.log(rain.drops.length);
    clear();
    for(var i = 0; i < rain.drops.length; i++){
        var drop = rain.drops[i];
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;
        if(drop.y >= window.innerHeight){
            rain.deleteDrop(i);
        }
    }
    rain.createDrop();
}, 10)
    