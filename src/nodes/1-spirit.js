import DialogManager from '../js/managers/dialog';

const text1 = 'Bonjour, pourriez-vous m\'aider? Mes parents se sont transformés en cochons!\n' +
  '\n' ;
const text2 = 'Bonjour, petite. Bienvenue dans le monde des esprits!';
//Je vois que tu es humaine. Si tu ne veux pas disparaître, tu dois aller chercher du travail.
//    Je sais que Yubaba cherche une jeune fille pour travailler dans les bains publiques.' ;

function bonjour() {
  alert('bonjour');
}

export default function () {
    DialogManager.showDialog('Chihiro', text1, bonjour, true);
}