import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
//import acceptNode from '../nodes/1-';
import refuseNode from '../nodes/2-haku';

const text1 = 'Chihiro et ses parents arrivent dans le monde des esprits. Ses parents vont vers le marché mais Chihiro sent que quelque chose de mal va se passer...';

function selectedChoice1() {
  State.switchToState(acceptNode);
}

function selectedChoice2() {
  State.switchToState(refuseNode);
}

function text1Finish () {
  DialogManager.showChoices([
    { text: 'Suivre ses parents', cb: selectedChoice1 },
    { text: 'Ne pas suivre ses parents', cb: selectedChoice2 },
  ]);
}

export default function (){
  DialogManager.showDialog('', text1, text1Finish);
}