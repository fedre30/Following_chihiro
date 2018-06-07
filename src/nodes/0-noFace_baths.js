import background from '../assets/0-noFace_baths.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/noFace.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import acceptNode from '../nodes/1-monster';
import refuseNode from '../nodes/2-monster';

const text1 = '{{name}} va aux bains publiques pour commencer à préparer des bains aux herbes avec la seule plaquette que le patron lui a donné.\n' +
  'Soudain, Sans-visage s\'approche avec beaucoup de plaquettes dans la main et les tend vers {{name}} pour lui offrir.';

function selectedChoice1() {
  State.switchToState(acceptNode);
}

function selectedChoice2() {
  State.switchToState(refuseNode);
}

function text1finish () {
  DialogManager.showChoices([
    { text: 'Accepter', cb: selectedChoice1 },
    { text: 'Refuser', cb: selectedChoice2 },
  ]);
}

export default function (){
  SoundManager.clearSound();
  SoundManager.setSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, text1finish);
}