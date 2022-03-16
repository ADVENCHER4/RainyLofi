const mutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker_1f508.png";
const unmutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker-with-three-sound-waves_1f50a.png";
const settingsForm = `
<form class="settingsform" id="settingsform">
    <p>Фоновое изображение</p>
    <input type="text" id="background">
    <p> Толщина капель</p>
    <input type="range" min="1" max="10"  id="width">
    <p>Скорость капель</p>
    <input type="range" min="5" max="100" step="5" id="speed">
    <p>Угол наклона</p>
    <input type="range" min="-45" max="45" step="5" id="angle">
    <p>Цвет</p>
    <input type="text" id="color">
    <p>Звук дождя</p>
    <input type="text" id="rainsound">
    <p>Музыка</p>
    <input type="text" id="music">
    <button id="savebutton">Сохранить</button>
</form>
`;
const standardSettings = {
    "background": "https://cdn6.aptoide.com/imgs/0/1/4/014be28e2e66abc79afe5b216e856a9b_fgraphic.png",
    "width": 2,
    "speed": 8,
    "angle": 0,
    "color": "#7fffd4",
    "rainsound": "https://www.youtube.com/watch?v=PSod4eZefx8",
    "music": "https://www.youtube.com/watch?v=5qap5aO4i9A",
}
var settings;
export function initSettings() {
    if(localStorage.getItem("settings")===undefined || localStorage.getItem("settings")===null){
        settings = standardSettings;
    } else{
        settings = JSON.parse(localStorage.getItem("settings"));
    }
}
export {mutedImage, unmutedImage, settingsForm, settings, standardSettings};