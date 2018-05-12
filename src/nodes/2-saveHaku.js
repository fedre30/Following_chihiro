import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-saveNoFace';

const text1 = "Oh non! Haku est en danger! \n" +
  "Il a volé le sigille de Zeniba et a été attaqué par des oiseaux en papier.\n" +
  "[nom choisi] le ramène dans la chaufferie inconscient et en regardant la boulette, elle lui donne en guise de médicament.\n" +
  "Haku vomit le sigille et reprend sa forme humaine.";


export default function () {
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)});
}