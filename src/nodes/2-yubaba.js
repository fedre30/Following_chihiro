import background from '../assets/2-yubaba.png';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-name';

const text1 = "Bonjour, Yubaba-san. Je suis venue pour vous demander un travail.";

const text2= "Mmm... une humaine dans mes bains publiques? Jamais! ";

const text3 = "S'il vous plaît, madame. Je ne sais plus où se trouvent mes parents et Haku m'a dit que je dois travailler si je ne veux pas disparaitre. ";

const text4 = "Mmm.. Haku, hein? Bon, je vais te donner une chance, mais à la première erreur, je vais résilier le contrat.\n" +
  "En revanche, tu ne pourras pas utiliser ton prénom. Choisis le prénom qui te convient le plus"

function finishText1(){
  DialogManager.showDialog('Yubaba :', text2, finishText2)
}

function finishText2(){
  DialogManager.showDialog('Chihiro :', text3, finishText3)
}

function finishText3(){
  DialogManager.showDialog('Yubaba :', text4, ()=> {State.switchToState(nextNode)}, true)
}



export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Chihiro :', text1, finishText1);
}