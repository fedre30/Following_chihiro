import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import video from "./0-intro";


function started() {
    State.switchToState(video);
}

function startStory () {
    DialogManager.showChoices([
        { text: 'Commencer', cb: started }
    ]);
}

export default function (){
    DialogManager.showDialog('', '', startStory);
}