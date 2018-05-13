import background from '../assets/0-stayWithParents.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';


const text1 = "Chihiro rentra avec ses parents heureuse de l'aventure qu'elle a vécu ";


export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)});
}