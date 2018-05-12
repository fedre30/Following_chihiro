import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/0-noFace_baths';

const text1 = "Je suis content que tu as signé le contrat, [nom choisi]. C'est comme ça que tu t'appelles maintenant, n'est-ce pas?\n" +
  "J'ai une mauvaise nouvelle. Tes parents ont mangé la nourriture du marché et ils ont été transformés en cochons!.";

const text2= "Oh non! Comment les sauver?";

const text3 = "Si tu travailles dur, Yubaba pourra peut-être t'aider à les retransformer en humains.";

const text4 = " D'accord, c'est ce que je vais faire!";

function finishText1(){
  DialogManager.showDialog('Chihiro :', text2, finishText2)
}

function finishText2(){
  DialogManager.showDialog('Haku :', text3, finishText3)
}

function finishText3(){
  DialogManager.showDialog('Chihiro :', text4, ()=> {State.switchToState(nextNode)}, true)
}



export default function () {
  DialogManager.showDialog('Haku :', text1, finishText1);
}