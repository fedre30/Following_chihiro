import style from '../style/main.sass';

import './player';

const styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

