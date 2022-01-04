const mutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker_1f508.png";
const unmutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker-with-three-sound-waves_1f50a.png";
const settingsForm = `
<div class="settingsform" id="settingsform">
    <p> Толщина капель</p>
    <input type="range" min="1" max="10"  id="width">
    <p>Скорость капель</p>
    <input type="range" min="5" max="100" step="5" id="speed">
    <p>Угол наклона</p>
    <input type="range" min="-90" max="90" step="5" id="angle">
    <p>Цвет</p>
    <input type="text" id="color">
    <p>Звук дождя</p>
    <input type="text" id="rainsound">
    <p>Музыка</p>
    <input type="text" id="music">
    <p>Громкость</p>
    <input type="range" min="0" max="100" step="10" id="volume">
    <button id="savebutton">Сохранить</button>
</form>
`;
const standardSettings = {
    "width": 2,
    "speed": 8,
    "angle": 0,
    "color": "#7fffd4",
    "rainsound": "adfsda",
    "music": "adf",
    "volume": 80
}
var settings;
export function initSettings() {
    if(localStorage.getItem("settings")===undefined){
        settings = standardSettings;
    } else{
        settings = JSON.parse(localStorage.getItem("settings"));
    }
}
export {mutedImage, unmutedImage, settingsForm, settings, standardSettings};