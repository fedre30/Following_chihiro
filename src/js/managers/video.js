import {displayInfo} from '../../nodes/0-intro';


class VideoManager{
    constructor(){
        this.dialogEl = document.querySelector('.dialog-container');
        this.content = document.querySelector('.video');
    }
    showVideo(videoEl){
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.content.appendChild(source);
        this.content.onended = function () {
            displayInfo();
        };
    }

    showBgVideo(videoEl){
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.content.appendChild(source);
        this.content.setAttribute('loop','true')
    }

    clearVideo(){
        this.dialogEl.style.background = "rgba(77, 104, 135, 0.7)";
        this.content.remove();
    }
}

const instance = new VideoManager();

export default instance;