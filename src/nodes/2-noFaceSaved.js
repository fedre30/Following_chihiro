import State from "../js/managers/state";
import withSansVisage from "./1-zeniba";
import withoutSansVisage from "./2-zeniba";
import DialogManager from "../js/managers/dialog";

const text1 = 'Tout le monde est en fête car [nom choisi] a guéri Sans-Visage.\n' +
    'Néanmoins, [nom choisi] veut aller voir la sorcière Zeniba pour lui rendre le ' +
    'sigille et lui demander de l\'aide pour soigner les blessures de Haku.';



function selectedChoice1() {
    State.switchToState(withSansVisage);
}

function selectedChoice2() {
    State.switchToState(withoutSansVisage);
}

export default function text1Finish() {
    DialogManager.showDialog('', text1);
    DialogManager.showChoices([
      { text: 'Allez voir Zeniba avec Sans-Visage', cb: selectedChoice1 },
        { text: 'Allez voir Zeniba sans Sans-Visage', cb: selectedChoice2 },
    ]);
}

