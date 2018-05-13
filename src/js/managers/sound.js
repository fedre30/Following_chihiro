class SoundManager{
    constructor(){
        this.content = document.querySelector('#player');
    }

    activeSound(videoEl){
        const source = document.createElement('source');
        source.setAttribute('src',videoEl);
        this.content.appendChild(source);
    }
}

const instance = new SoundManager();

export default instance;