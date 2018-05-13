class BackgroundManager{
  constructor(){
    this.content = document.querySelector('.mainContent');
  }

  setBackground(url){
    this.content.style.backgroundImage = `url(${url})`;
    this.content.style.backgroundSize = 'cover';
  }
}

const instance = new BackgroundManager();

export default instance;