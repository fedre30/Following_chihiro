import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';


const text1 = "Chihiro reste avec Haku dans le monde prête pour vivre d'autres aventures avec lui dans le monde des esprits";


export default function () {
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)});
}