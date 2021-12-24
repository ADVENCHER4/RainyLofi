import { Rain } from "./rain.js";

const mutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker_1f508.png";
const unmutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker-with-three-sound-waves_1f50a.png";

var rain = new Rain();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var button = document.getElementById("button");
var isPlaying = false;
initCanvas();
window.addEventListener("resize", initCanvas);
button.addEventListener("click", onClicked);
button.src = mutedImage;


function clear() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, innerWidth, innerHeight);
}

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "aquamarine";
    ctx.lineWidth = 2;
}

function onClicked(){
    isPlaying = !isPlaying;
    swapImage();
}

function swapImage(){
    if(isPlaying){
        button.src = unmutedImage;
    } else{
        button.src = mutedImage;
    }
}

setInterval(function () {
    clear();
    for (var i = 0; i < rain.drops.length; i++) {
        var drop = rain.drops[i];
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;
        if (drop.y >= window.innerHeight) {
            rain.deleteDrop(i);
        }
    }
    rain.createDrops();
}, 8);