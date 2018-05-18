import background from '../assets/2-saveHaku.png';
import background2 from '../assets/hakuHuman.gif';
import BackgroundManager from '../js/managers/background';
import sound from '../../public/assets/music/haku.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import video from '../assets/haku_human.mov';
import nextNode from '../nodes/2-saveNoFace';
import VideoManager from "../js/managers/video";

const text1 = "Oh non! Haku est en danger! \n" +
  "Il a volé le sigille de Zeniba et a été attaqué par des oiseaux en papier.\n" +
  "{{name}} le ramène dans la chaufferie inconscient et en regardant la boulette, elle lui donne en guise de médicament.\n";

const text2 = "Haku vomit le sigille et reprend sa forme humaine. Chihiro le laisse reposer et va chercher Yubaba";


function text1finish() {
  DialogManager.showDialog('', text2, () => {

      VideoManager.clearVideo();
    State.switchToState(nextNode)}, true)
}
export default function () {
  BackgroundManager.clearBackground();
  SoundManager.activeSound(sound);
  VideoManager.setVideo();
  VideoManager.showBgVideo(video);
  DialogManager.showDialog('', text1, text1finish, true);
}