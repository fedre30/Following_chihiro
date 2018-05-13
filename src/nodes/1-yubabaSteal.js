import background from '../assets/1-yubabaSteal.jpg';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/dramatic.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import withSansVisage from '../nodes/1-zeniba';
import withoutSansVisage from '../nodes/2-zeniba';

const text1 = 'Oh non! Yubaba a vu la boullette amère et l\'a volé de la main de {{name}}!';

const text2 = 'C\'était un médicament pour libérer des esprits! Il pouvait sauver tes parents!\n' +
  'Ne t\'inquiète pas, je vais essayer de la reprendre. Va chercher Zeniba, donne lui ce sigille en tant ' +
  'que récompense et elle saura comme t\'aider!\n';


function selectedChoice1() {
  State.switchToState(withSansVisage);
}

function selectedChoice2() {
  State.switchToState(withoutSansVisage);
}

function text1Finish() {
  DialogManager.showDialog('', text2);
  DialogManager.showChoices([
    {text: 'Allez voir Zeniba avec Sans-Visage', cb: selectedChoice1},
    {text: 'Allez voir Zeniba sans Sans-Visage', cb: selectedChoice2},
  ]);
}

export default function () {
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, text1Finish);
}