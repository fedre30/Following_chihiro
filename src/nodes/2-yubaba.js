import background from '../assets/2-yubaba.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/yubaba.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-name';
import VideoManager from '../js/managers/video'
import video from '../assets/yubaba.mov';

const text1 = "Bonjour, Yubaba-san. Je suis venue pour vous demander un travail.";

const text2= "Mmm... une humaine dans mes bains publiques? Jamais! ";

const text3 = "S'il vous plaît, madame. Je ne sais plus où se trouvent mes parents et Haku m'a dit que je dois travailler si je ne veux pas disparaitre. ";

const text4 = "Mmm.. Haku, hein? Bon, je vais te donner une chance, mais à la première erreur, je vais résilier le contrat.\n" +
  "En revanche, tu ne pourras pas utiliser ton prénom. Choisis le prénom qui te convient le plus"

function text1finish(){
  DialogManager.showDialog('Yubaba :', text2, text2finish,true)
}

function text2finish(){
  DialogManager.showDialog('Chihiro :', text3, text3finish,true)
}

function text3finish(){
  DialogManager.showDialog('Yubaba :', text4, ()=> {State.switchToState(nextNode)}, true)
}

function skip() {
  VideoManager.clearVideo();
  DialogManager.displayInfo('Chihiro',text1,song,background,text1finish,true);
}



export default function () {
  BackgroundManager.clearBackground();
  SoundManager.clearSound();
  VideoManager.setVideo();
  VideoManager.showVideo(video,skip);
  DialogManager.showDialog('', '', skip,true);

}