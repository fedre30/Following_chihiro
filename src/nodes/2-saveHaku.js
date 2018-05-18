import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/haku.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-saveNoFace';
import video from '../assets/haku_human.mov';


const text1 = "Oh non! Haku est en danger! \n" +
  "Il a volé le sigille de Zeniba et a été attaqué par des oiseaux en papier.\n" +
  "{{name}} le ramène dans la chaufferie inconscient et en regardant la boulette, elle lui donne en guise de médicament.\n";

const text2 = "Haku vomit le sigille et reprend sa forme humaine. Chihiro le laisse reposer et va chercher Yubaba";


function text1finish() {
  DialogManager.showDialog('', text2, () => {State.switchToState(nextNode)}, true)
}
export default function () {
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(video);
  DialogManager.showDialog('', text1, text1finish, true);
}