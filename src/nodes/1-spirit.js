import DialogManager from '../js/managers/dialog';

const text1 = 'Bonjour, pourriez-vous m\'aider? Mes parents se sont transformés en cochons!\n' +
    '\n' ;

function selectedChoice1() {
    alert('selected 1');
}

function text1Finish () {
    DialogManager.showChoices([
        { text: 'Suivant', cb: selectedChoice1 }
    ]);
}

export default function (){
    DialogManager.showDialog('Chihiro  :',text1, text1Finish);
}