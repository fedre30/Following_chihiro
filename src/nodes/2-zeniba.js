import background from '../assets/2-Zeniba.png';
import BackgroundManager from '../js/managers/background';
import song from '../../public/assets/music/zeniba.mp3';
import SoundManager from '../js/managers/sound';
import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-riddle';
import VideoManager from '../js/managers/video'
import video from '../assets/train_withnoface.mov';

const text1 = "{{name}} rend le sigille à Zeniba et passe un bon moment avec elle.";

const text2= " Oh je sens quelque chose dehors. Va regader, petite";

const text3 = "{{name}} sort et voit avec surprise que Haku est venu la chercher sous forme de dragon.";

function text1finish(){
  DialogManager.showDialog('Zeniba :', text2, text2finish,true)
}

function text2finish(){
  DialogManager.showDialog('', text3, ()=> {State.switchToState(nextNode)}, true)
}

function skip() {
    VideoManager.clearVideo();
    VideoManager.clearVideo();
    DialogManager.displayInfo('',text1,song,background,text1finish,true);
}


export default function () {
    SoundManager.clearSound();
    VideoManager.clearVideo();
    BackgroundManager.clearBackground();
    VideoManager.setVideo();
    VideoManager.showVideo(video,skip);
    DialogManager.showDialog('', '', skip,true);
}