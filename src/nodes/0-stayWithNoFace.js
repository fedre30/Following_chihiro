import background from '../assets/0-stayWithNoFace.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';


const text1 = "Chihiro reste avec Kaonashi dans le monde prête pour vivre d'autres aventures avec lui dans le monde des esprits";


export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)});
}