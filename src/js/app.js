import style from '../style/main.sass';
import './player';
import test from '../nodes/2-haku';


const styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

test();
