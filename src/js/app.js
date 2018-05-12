import style from '../style/main.sass';
import './player';
import start from '../nodes/0-intro';


const styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

start();
