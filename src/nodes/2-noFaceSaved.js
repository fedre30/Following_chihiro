import background from '../assets/2-noFaceSaved.gif';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/cheers.mp3';
import SoundManager from '../js/managers/sound';
import State from "../js/managers/state";
import withSansVisage from "./1-zeniba";
import withoutSansVisage from "./2-zeniba";
import DialogManager from "../js/managers/dialog";

const text1 = 'Tout le monde est en fête car {{name}} a guéri Sans-Visage.\n' +
    'Néanmoins, {{name}} veut aller voir la sorcière Zeniba pour lui rendre le ' +
    'sigille et lui demander de l\'aide pour soigner les blessures de Haku.';


function selectedChoice1() {
    State.switchToState(withSansVisage);
}

function selectedChoice2() {
    State.switchToState(withoutSansVisage);
}

function text1finish(){
  DialogManager.showChoices([
    { text: 'Allez voir Zeniba avec Sans-Visage', cb: selectedChoice1 },
    { text: 'Allez voir Zeniba sans Sans-Visage', cb: selectedChoice2 },
  ]);
}

export default function () {
    SoundManager.clearSound();
    SoundManager.activeSound(song);
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('', text1, text1finish);

}

