class SoundManager{
    constructor(){
        this.content = document.querySelector('#player');
    }

    activeSound(videoEl){
        this.content.setAttribute('src',videoEl);
    }

    clearSound(){
       this.content.removeAttribute('src');

    }

}

const instance = new SoundManager();

export default instance;