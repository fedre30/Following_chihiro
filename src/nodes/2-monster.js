import background from '../assets/2-monster.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-saveHaku';

const text1 = "Un gros esprit putride arrive et demande de se faire laver. Grâce à l'aide de toute la communauté, {{name}} libère l'esprit de son corps putride et reçoit une boulette amère de sa part.  ";


export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)}, true);
}