import background from '../assets/0-intro2.png';
import BackgroundManager from '../js/managers/background';
import sound from '../../public/assets/music/cejour.mp3';
import SoundManager from '../js/managers/sound';
import video from '../assets/spirited_away_intro.mov';
import VideoManager from '../js/managers/video'
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import acceptNode from '../nodes/1-parentsTransformation';
import refuseNode from '../nodes/2-haku';

const text1 = 'Chihiro et ses parents arrivent dans le monde des esprits. Ses parents vont vers le marché mais Chihiro ' +
    'sent que quelque chose de mal va se passer...';

function selectedChoice1() {
  State.switchToState(acceptNode);
}

function selectedChoice2() {
  State.switchToState(refuseNode);

}
function skip() {
    VideoManager.clearVideo();
    SoundManager.activeSound(sound);
    displayInfo();
}

function text1Finish () {
  DialogManager.showChoices([
    { text: 'Suivre ses parents', cb: selectedChoice1 },
    { text: 'Ne pas suivre ses parents', cb: selectedChoice2 },
  ]);
}
export function displayInfo() {
    VideoManager.clearVideo();
    SoundManager.activeSound(sound);
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('', text1, text1Finish);
}

export default function (){
BackgroundManager.clearBackground();
VideoManager.showVideo(video);
DialogManager.showDialog('', '', skip,true);
}