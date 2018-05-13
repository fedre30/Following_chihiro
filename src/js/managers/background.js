class BackgroundManager{
  constructor(){
    this.content = document.querySelector('.mainContent');
  }

  setBackground(url){
    this.content.style.backgroundImage = `url(${url})`;
  }
}

const instance = new BackgroundManager();

export default instance;