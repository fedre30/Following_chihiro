import background from '../assets/2-yubaba.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/yubaba.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/1-name';
import VideoManager from '../js/managers/video'
import video from '../assets/yubaba.mov';



const text1 = "Bonjour, Yubaba-san. Je suis venue pour vous demander un travail.";

const text2 = "Mmm... une humaine dans mes bains publiques? Jamais! ";

const text3 = "S'il vous plaît, madame. Je ne sais plus où se trouvent mes parents et cet esprit m'a dit que je dois travailler si je ne veux pas disparaitre. ";

const text4 = "Mmm.. Un esprit, hein? Bon, je vais te donner une chance, mais à la première erreur, je vais résilier le contrat.\n" +
  "En revanche, tu ne pourras pas utiliser ton prénom. Choisis le prénom qui te convient le plus";

function finishText1() {
  DialogManager.showDialog('Yubaba :', text2, finishText2,true)
}

function finishText2() {
  DialogManager.showDialog('Chihiro :', text3, finishText3,true)
}

function finishText3() {
  DialogManager.showDialog('Yubaba :', text4, () => {
    State.switchToState(nextNode)
  }, true)
}


export default function () {
  BackgroundManager.clearBackground();
  SoundManager.clearSound();
  VideoManager.setVideo();
  VideoManager.showVideo(video);
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Chihiro :', text1, finishText1,true);
}