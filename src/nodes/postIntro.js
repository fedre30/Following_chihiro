import background from '../assets/0-intro1.jpg';
import BackgroundManager from '../js/managers/background';
import VideoManager from '../js/managers/video';
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
    BackgroundManager.setBackground(background);
    DialogManager.showDialog('', '', startStory);
}