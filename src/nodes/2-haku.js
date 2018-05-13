import background from '../assets/2-haku.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-boilerroom';


const text1 = 'Salut! Je suis Haku, l\'apprenti de la sorcière Yubaba. Bienvenue dans le monde des esprits! Mais attends, j\'ai l\'impression de t\'avoir déjà rencontrée...';
const text2 = 'Mmm.. je vois que tu es humaine. Si tu ne veux pas disparaître, tu dois aller chercher du travail.\n' +
  'Viens, je t\'accompagne à la chaufferie pour rencontrer Kamaji.\n';

function finishText1(){
  DialogManager.showDialog('Haku : ', text2, ()=> {State.switchToState(nextNode)}, true)
}


export default function () {
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('Haku :', text1, finishText1);
}

