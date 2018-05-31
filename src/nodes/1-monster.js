import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/monster.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/1-yubabaSteal';
import video from '../assets/monster.mov';
import VideoManager from "../js/managers/video";

const text1 = "Un gros esprit putride arrive et demande de se faire laver. Grâce à l'aide de toute la communauté," +
  " {{name}} libère l'esprit de son corps putride et reçoit une boulette amère de sa part.  ";


export default function () {
  BackgroundManager.clearBackground();
  SoundManager.activeSound(song);
  VideoManager.setVideo();
  VideoManager.showBgVideo(video);
  DialogManager.showDialog('', text1, () => {
  VideoManager.clearVideo();
  State.switchToState(nextNode);

  }, true);
}