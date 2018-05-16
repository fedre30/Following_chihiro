class DialogManager {
    constructor() {
        this.dialogContainer = document.querySelector(".dialog-container");
        this.dialogEl = document.querySelector(".dialog");
        this.authorEl = document.querySelector(".dialog-author");
        this.textEl = document.querySelector(".dialog-text");
        this.choicesEl = document.querySelector(".choices");
        this.content = document.querySelector(".content");
        this.nameChoice = document.querySelector(".nameChoice");
        this._name = "Chihiro";
    }

    hide() {
        this.dialogContainer.style.display = "none";
        this.clearChoices();
        this.clearText();
    }


    showDialog(speaker, text, cb, withNextButton, animCb) {
        text = text.replace(new RegExp('{{name}}', 'gi'), this.name);
        speaker = speaker.replace(new RegExp('{{name}}', 'gi'), this.name);

        this.authorEl.innerText = speaker;
        let index = 1;

        withNextButton = withNextButton || false;

        const animateText = () => {
            if(index > text.length){
                if (withNextButton) {
                    if (typeof animCb !== 'undefined' && animCb !== null) animCb();
                    this.showChoices([
                        {text: "Suivant", cb: cb}
                    ]);
                } else {
                    setTimeout(cb, 10);
                }
                return;
            }
            this.textEl.innerText = text.substring(0,index);
            index++;

            setTimeout(animateText, 2 + Math.random() * 4);
        };

        setTimeout(animateText, 50);
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

    displayInput(){
        const input = document.createElement('input');
        input.classList.add('nameChoice');
        input.setAttribute('maxlength','15');
        this.textEl.appendChild(input);
        return input;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

const instance = new DialogManager();

export default instance;