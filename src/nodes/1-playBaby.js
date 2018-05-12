import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from "./1-yubaba";


const text1 = 'Salut, je suis le bébé de Yubaba. J\'ai ton médicament. Si tu le veux, tu dois jouer avec moi et gagner.\n' +
    'Es-tu prête? Allons-y!' ;


export default function finishText1() {
    DialogManager.showDialog('Bébé :', text1, ()=> {State.switchToState(nextNode)}, true);
}
