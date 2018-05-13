import {test} from '../../nodes/0-intro';


class VideoManager{
    constructor(){
       this.content = document.querySelector('.video');
    }

    showVideo(videoEl){
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.content.appendChild(source);
        this.content.onended = function () {
            test();
        } ;
    }

}

const instance = new VideoManager();

export default instance;