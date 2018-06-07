import style from '../style/main.sass';

import SoundManager from '../js/managers/sound';
import player from  './player';
import start from '../nodes/postIntro';

SoundManager.setSound();
player.init();


const styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

start();
