import background from '../assets/1-zeniba.png';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/1-playBaby';

const text1 = "[nom choisi] rend le sigille à Zeniba et passe un bon moment avec elle.\n";

const text2= "C'est tard, ma puce. Tu devrais rentrer avec ton ami si tu ne veux pas rater ton train.";



function finishText1(){
    DialogManager.showDialog('Chihiro :', text2, ()=> {State.switchToState(nextNode)} )
}

export default function () {
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('', text1, finishText1);
}