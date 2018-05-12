import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import goodAnswer from '../nodes/2-goodAnswer';
import wrongAnswer from '../nodes/0-stayWithHaku';

const text1 = 'Bonjour, [nom choisi]. Je vois que tu te débrouilles pas mal dans ce monde.Je vais te donner une chance: si tu veux que tes parents redeviennent humains, alors répond bien à cette devinette:';

const text2 = 'Combien têtes d\'Ariel, sensei Hokage, as-tu vu dans tous les images?';

function selectedChoice1() {
  State.switchToState(goodAnswer);
}

function selectedChoice2() {
  State.switchToState(wrongAnswer);
}

function text1Finish () {
  DialogManager.showDialog('Yubaba', text2, text2Finish);
}

function text2Finish() {
  DialogManager.showChoices([
    { text: '6', cb: selectedChoice1 },
    { text: '9', cb: selectedChoice2 },
  ]);
}

export default function (){
  DialogManager.showDialog('Yubaba', text1, text1Finish);
}