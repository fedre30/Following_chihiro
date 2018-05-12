class DialogManager {
    constructor() {
        this.dialogEl = document.querySelector(".dialog-container");
        this.authorEl = document.querySelector(".dialog-author");
        this.textEl = document.querySelector(".dialog-text");
        this.choicesEl = document.querySelector(".choices");
    }

    hide() {
        this.dialogEl.style.display = "none";
    }

    showDialog(speaker, text, cb) {
        this.authorEl.innerText = speaker;
        this.textEl.innerText = text;
        setTimeout(cb, 3000);
    }

    showChoices(choices) {
        this.clearChoices();
        for (let i = 0; i < choices.length; i++) {
            const choice = choices[i];
            const choiceItem = document.createElement('div');
            choiceItem.classList.add('choiceItem');
            choiceItem.innerText = choice.text;
            this.choicesEl.appendChild(choiceItem);
            this.choicesEl.addEventListener('click', ()=> {
                choice.cb;
                this.clearChoices();
                /*this.clearText();
                this.clearAuthor();*/
            })
        }
    }

    clearChoices(){
        while (this.choicesEl.hasChildNodes()){
            this.choicesEl.removeChild(this.choicesEl.firstChild);
        }
    }

    /*clearText(){
        this.textEl.innerText = '';
    }

    clearAuthor(){
        this.authorEl.innerText = '';
    }*/
}

const instance = new DialogManager();

export default instance;