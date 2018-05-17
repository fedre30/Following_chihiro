import background from '../assets/2-haku.jpg';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/haku.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/0-noFace_baths';

const text1 = "Salut! Je suis Haku, l'apprenti de la sorcière Yubaba. \n" +
    "Mais attends, j'ai l'impression de t'avoir déjà rencontrée...";

const text2= "J'ai entendu que tes parents se sont transformés en cochons. Tu verras, si tu travailles dur, Yubaba pourra peut-etre t'aider. ";



function text1finish(){

    DialogManager.showDialog('Haku : ', text2, ()=> {State.switchToState(nextNode)},true )
}

export default function () {
    SoundManager.clearSound();
    SoundManager.activeSound(song);
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('Haku : ', text1, text1finish,true);
}