import { redrawRain, initCanvas } from "./renderer.js";
import { unmutedImage, mutedImage, settingsForm, settings, standardSettings, initSettings } from "./values.js";
var isPlaying = false;
var isSettingsOpened = false;
var button = document.getElementById("soundbutton");
var settingsField = document.getElementById("settings");

window.addEventListener("resize", initCanvas);
document.getElementById("soundbutton").addEventListener("click", swapImage);
document.getElementById("settingsbutton").addEventListener("click", openSettings);
button.src = mutedImage;
initSettings();
initCanvas();
setInterval(redrawRain, settings["speed"]);
document.body.style.background = "url(" + settings["background"]+ ")";
document.body.style.backgroundSize = "cover";

function swapImage() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        button.src = unmutedImage;
    } else {
        button.src = mutedImage;
    }
}
function openSettings() {
    isSettingsOpened = !isSettingsOpened;
    if (isSettingsOpened) {
        settingsField.innerHTML = settingsForm;
        document.getElementById("background").value = settings["background"];
        document.getElementById("width").value = settings["width"];
        document.getElementById("speed").value = 100 - settings["speed"];
        document.getElementById("angle").value = settings["angle"];
        document.getElementById("color").value = settings["color"];
        document.getElementById("rainsound").value = settings["rainsound"];
        document.getElementById("music").value = settings["music"];
        document.getElementById("savebutton").addEventListener("click", savePrefs);
    } else {
        settingsField.innerHTML = "";
    }
}
function savePrefs() {
    var rawSettings = {
        "background": document.getElementById("background").value,
        "width": document.getElementById("width").value,
        "speed": 100 - document.getElementById("speed").value,
        "angle": document.getElementById("angle").value,
        "color": document.getElementById("color").value,
        "rainsound": document.getElementById("rainsound").value,
        "music": document.getElementById("music").value,
    };
    if(rawSettings["color"] && rawSettings["rainsound"] && rawSettings["music"] && rawSettings["background"]){
        localStorage.setItem("settings", JSON.stringify(rawSettings));
    } else{
        localStorage.setItem("settings", JSON.stringify(standardSettings));
    }

    location.reload();
    openSettings();
}