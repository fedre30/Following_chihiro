import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import acceptNode from '../nodes/1-';
import refuseNode from '../nodes/2-';

const text1 = '[Nom choisi] va aux bains publiques pour commencer à préparer des bains aux herbes avec la seule plaquette que le patron lui a donné.\n' +
  'Soudain, Sans-visage s\'approche avec beaucoup de plaquettes dans la main et les tend vers [nom choisi] pour lui offrir.';

function selectedChoice1() {
  State.switchToState(acceptNode);
}

function selectedChoice2() {
  State.switchToState(refuseNode);
}

function text1Finish () {
  DialogManager.showChoices([
    { text: 'Accepter', cb: selectedChoice1 },
    { text: 'Refuser', cb: selectedChoice2 },
  ]);
}

export default function (){
  DialogManager.showDialog('', text1, text1Finish);
}