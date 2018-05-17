class BackgroundManager{
  constructor(){
    this.content = document.querySelector('.mainContent');
  }

  setBackground(url){
    this.content.style.backgroundImage = `url(${url})`;
    this.content.style.backgroundSize = 'cover';
  }

  clearBackground(){
    this.content.style.backgroundImage = '';
  }
}

const instance = new BackgroundManager();

export default instance;