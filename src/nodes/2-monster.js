import BackgroundManager from '../js/managers/background';
import background from '../assets/2-monster.jpg'
import sound from '../../public/assets/music/monster.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-saveHaku';
import video from '../assets/monster.mov';
import VideoManager from "../js/managers/video";

const text1 = "Un gros esprit putride arrive et demande de se faire laver. Grâce à l'aide de toute la communauté, " +
    "{{name}} libère l'esprit de son corps putride et reçoit une boulette amère de sa part.  ";



function skip() {
    VideoManager.clearVideo();
    DialogManager.displayInfo('',text1,sound,background,()=> { State.switchToState(nextNode)}, true);
}

export default function () {
  BackgroundManager.clearBackground();
  SoundManager.clearSound();
  VideoManager.setVideo();
  VideoManager.showBgVideo(video);
  DialogManager.showDialog('', '', skip,true);

}