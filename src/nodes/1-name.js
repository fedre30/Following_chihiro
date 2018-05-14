import background from '../assets/2-name.png';
import BackgroundManager from '../js/managers/background';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/1-haku';

const text1 = "Choisissez votre nom : ";

export default function () {
    BackgroundManager.setBackground(background);

    let inputEl;

    DialogManager.showDialog('', text1, ()=> {
        DialogManager.name = inputEl.value;

        State.switchToState(nextNode);
    } , true, () => {
        inputEl = DialogManager.displayInput();
        inputEl.value = DialogManager.name;
        inputEl.focus();
    });
}