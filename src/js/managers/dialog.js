class DialogManager {
    constructor() {
        this.dialogEl = document.querySelector(".dialog-container");
        this.authorEl = document.querySelector(".dialog-author");
        this.textEl = document.querySelector(".dialog-text");
        this.choicesEl = document.querySelector(".choices");
    }

    hide() {
        this.dialogEl.style.display = "none";
        this.clearChoices();
        this.clearText()
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
            choiceItem.classList.add('choices-item');
            choiceItem.innerText = choice.text;
            this.choicesEl.appendChild(choiceItem);
            choiceItem.addEventListener('click', ()=> {
                choice.cb();
                this.clearChoices();
            })
        }
    }

    clearChoices(){
        while (this.choicesEl.hasChildNodes()){
            this.choicesEl.removeChild(this.choicesEl.firstChild);
        }
    }

    clearText(){
        this.authorEl.innerText = '';
        this.textEl.innerText = '';
    }
}

const instance = new DialogManager();

export default instance;