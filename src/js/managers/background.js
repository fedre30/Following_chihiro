class BackgroundManager{
  constructor(){
    this.content = document.querySelector('.content');
  }

  setBackground(url){
    this.content.style.backgroundImage = `url(${url})`;
  }
}

const instance = new BackgroundManager();

export default instance;