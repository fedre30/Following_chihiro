import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';


const text1 = "Chihiro rentra avec ses parents heureuse de l'aventure qu'elle a vécu ";


export default function () {
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)});
}