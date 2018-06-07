import background from '../assets/1-zeniba.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/zeniba.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/1-playBaby';
import VideoManager from '../js/managers/video'
import video from '../assets/train_withnoface.mov';

const text1 = "{{name}} rend le sigille à Zeniba et passe un bon moment avec elle.\n";

const text2 = "C'est tard, ma puce. Tu devrais rentrer avec ton ami si tu ne veux pas rater ton train.";



function text1finish() {
  DialogManager.showDialog('Zeniba :', text2, () => {State.switchToState(nextNode)},true)
}

function skip() {
  VideoManager.clearVideo();
  DialogManager.showDialog('', text1, text1finish,true);
}


export default function () {
  BackgroundManager.clearBackground();
  VideoManager.setVideo();
  VideoManager.showVideo(video);
  SoundManager.clearSound();
  SoundManager.activeSound(song);
  BackgroundManager.setBackground(background);
  DialogManager.showDialog('', '', skip,true);
}