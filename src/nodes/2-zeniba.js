import DialogManager from '../js/managers/dialog';
import State from '../js/managers/state';
import nextNode from '../nodes/2-riddle';

const text1 = "[nom choisi] rend le sigille à Zeniba et passe un bon moment avec elle.";

const text2= " Oh je sens quelque chose dehors. Va regader, petite";

const text3 = "[nom choisi] sort et voit avec surprise que Haku est venu la chercher sous forme de dragon.";


function finishText1(){
  DialogManager.showDialog('Zeniba:', text2, finishText2)
}

function finishText2(){
  DialogManager.showDialog('', text3, ()=> {State.switchToState(nextNode)}, true)
}



export default function () {
  DialogManager.showDialog('', text1, finishText1);
}