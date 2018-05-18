import DialogManager from '../../js/managers/dialog';

class VideoManager{
    constructor(){
        this.dialogEl = document.querySelector('.dialog-container');
        this.content = document.querySelector('.mainContent');
    }
    setVideo(){
        this.dialogEl.style.background = '';
        const video = document.createElement('video');
        video.classList.add('video');
        video.setAttribute('autoPlay','true');
        this.content.appendChild(video);

        this.video = video;
    }

    showVideo(videoEl, loop = false){
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.video.appendChild(source);
        this.video.onended = function () {
        DialogManager.displayInfo();
        };
    }

    showBgVideo(videoEl){
        this.dialogEl.style.background = "rgba(77, 104, 135, 0.7)";
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.video.setAttribute('loop','true');
        this.video.appendChild(source);
        this.video.onended = function () {
            DialogManager.displayInfo();
        };
    }

    clearVideo(){
        this.dialogEl.style.background = "rgba(77, 104, 135, 0.7)";
        this.video.remove();
    }
}

const instance = new VideoManager();

export default instance;