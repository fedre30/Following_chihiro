import style from '../style/main.sass';
import './player';

import start from '../nodes/2-name';

const styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

start();
