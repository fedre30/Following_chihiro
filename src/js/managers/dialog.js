class DialogManager {
    constructor() {
        this.dialogEl = document.querySelector(".dialog-container");
        this.authorEl = document.querySelector(".dialog-author");
        this.textEl = document.querySelector(".dialog-text");
        this.choicesEl = document.querySelector(".choices");
        this.content = document.querySelector(".content");
        this.name = 'Chihiro';

    }

    hide() {
        this.dialogEl.style.display = "none";
        this.clearChoices();
        this.clearText();
    }


    showDialog(speaker, text, cb, withNextButton) {
        this.authorEl.innerText = speaker;
        //this.textEl.innerText = text;
        let index = 1;

        withNextButton = withNextButton || false;

        const animateText = () => {
            if(index > text.length){
                if (withNextButton) {
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

            setTimeout(animateText, 1 /*+ Math.random() * 40*/);
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


    setName(value){
       this.name = value;

    }
}

const instance = new DialogManager();

export default instance;