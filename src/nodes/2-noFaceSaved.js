import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from './2-zeniba';

const text1 = "Tout le monde est en fête car [nom choisi] a guéri Sans-Visage.\n" +
  "Néanmoins, [nom choisi] veut aller voir la sorcière Zeniba pour lui rendre le sigille et lui demander de l'aide pour soigner les blessures de Haku.";


export default function () {
  DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)}, true);
}