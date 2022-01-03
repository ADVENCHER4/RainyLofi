import { redrawRain, initCanvas } from "./renderer.js";
import { unmutedImage, mutedImage, settingsForm } from "./constants.js";

var isPlaying = false;
var isSettingsOpened = false;
var button = document.getElementById("soundbutton");
var settings = document.getElementById("settings");

window.addEventListener("resize", initCanvas);
document.getElementById("soundbutton").addEventListener("click", swapImage);
document.getElementById("settingsbutton").addEventListener("click", openSettings);
button.src = mutedImage;
initCanvas();
setInterval(redrawRain, 8);

function swapImage() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        button.src = unmutedImage;
    } else {
        button.src = mutedImage;
    }
}
function openSettings(){
    isSettingsOpened = !isSettingsOpened;
    if (isSettingsOpened) {
        settings.innerHTML = settingsForm;
        document.getElementById("form").addEventListener("onsubmit", savePrefs);
    } else {
        settings.innerHTML = "";
    }
}
function savePrefs(el){
    return false;
}