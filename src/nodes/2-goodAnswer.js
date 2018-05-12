import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import parents from '../nodes/0-stayWithParents';
import haku from '../nodes/0-stayWithHaku';

const text1 = 'Tu as deviné! Maintenant tu peux choisir si rentrer avec tes parents ou rester ici avec ton bien-aimé Haku';


function selectedChoice1() {
  State.switchToState(parents);
}

function selectedChoice2() {
  State.switchToState(haku);
}

function text1Finish() {
  DialogManager.showChoices([
    { text: 'Rentrer avec ses parents', cb: selectedChoice1 },
    { text: 'Rester dans le monde des esprits avec Haku', cb: selectedChoice2 },
  ]);
}

export default function (){
  DialogManager.showDialog('Yubaba :', text1, text1Finish);
}