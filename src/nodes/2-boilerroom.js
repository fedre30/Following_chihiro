import background from '../assets/2-boilerroom.jpg';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/kamaji.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-yubaba';

const text1 = "Bonjour,  Kamaji-san. Je suis venue pour vous demander de travailler ici.";

const text2= "Désolée, petite. Je n'ai besoin de personne pour preparer mes suwatari.\n" +
  "Par contre, je sais que Yubaba cherche une jeune fille pour travailler dans les bains publiques.\n" +
  "Va la voir, elle te donnera ce que tu cherches!";

function finishText1(){
  DialogManager.showDialog('Kamaji :', text2, ()=> {State.switchToState(nextNode)}, true)
}


export default function () {
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Chihiro :', text1, finishText1);
}