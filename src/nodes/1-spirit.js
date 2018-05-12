import DialogManager from '../js/managers/dialog';

const text1 = 'Bonjour, pourriez-vous m\'aider? Mes parents se sont transformés en cochons!';

function selectedChoice1() {
    alert('selected 1');
}

function selectedChoice2() {
    alert('selected 2');
}

function text1Finish () {
    DialogManager.showChoices([
        { text: 'Choix 1', cb: selectedChoice1 },
        { text: 'Choix 2', cb: selectedChoice2 },
    ]);
}

export default function (){
    DialogManager.showDialog('Chihiro', text1, text1Finish);
}