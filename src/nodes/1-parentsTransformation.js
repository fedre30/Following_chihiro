import background from '../assets/1-parentsTransformation.jpg';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from "./1-spirit";


const text1 = 'Oh non! Les parents de Chihiro se sont transformés en cochons! Chihiro court effrayée. Elle crie à ' +
    'l\'aide mais personne lui répond. Pourtant elle voit des gens bizarres arriver...   ';

export default function () {
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('', text1, ()=> {State.switchToState(nextNode)}, true);
}