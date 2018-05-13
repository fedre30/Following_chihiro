import background from '../assets/2-haku.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/0-noFace_baths';

const text1 = "Salut! Je suis Haku, l'apprenti de la sorcière Yubaba. \n" +
    "Mais attends, j'ai l'impression de t'avoir déjà rencontrée...";

const text2= "J'ai entendu que tes parents se sont transformés en cochons. Tu verras, si tu travailles dur, Yubaba pourra peut-etre t'aider. ";



function finishText1(){
<<<<<<< HEAD
    DialogManager.showDialog(`${DialogManager.name} :`, text2, ()=> {State.switchToState(nextNode)},true )
=======
    DialogManager.showDialog('Haku', text2, ()=> {State.switchToState(nextNode)},true )
>>>>>>> 67a79200bc44361647bae9fd46f5767d35dd5e56
}

export default function () {
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('Haku : ', text1, finishText1);
}