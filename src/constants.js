const mutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker_1f508.png";
const unmutedImage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speaker-with-three-sound-waves_1f50a.png";
const settingsForm = `
<div class="settingsform">
    <p> Толщина капель</p>
    <input type="range" min="1" max="10" class="slider">
    <p>Количество капель</p>
    <input type="range" min="10" max="100" class="slider">
    <p>Скорость капель</p>
    <input type="range" min="5" max="100" step="5" class="slider">
    <p>Угол наклона</p>
    <input type="range" min="-90" max="90" step="5" class="slider">
    <p>Цвет</p>
    <input type="text" placeholder="#7fffd4">
    <p>Звук дождя</p>
    <input type="text">
    <p>Музыка</p>
    <input type="text">
    <p>Громкость</p>
    <input type="range" min="0" max="100" step="10" class="slider">
    <button id="savebutton">Сохранить</button>
</form>
`;

export {mutedImage, unmutedImage, settingsForm};