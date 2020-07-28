import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

window.addEventListener('DOMContentLoaded', () => {
    
    const playerBtn   = document.querySelectorAll('.player-btn'),
          playerBlock = document.querySelectorAll('.player-block'),
          temp = document.querySelector('.temp');

    const diactivationPlayer = () => {
        playerBtn.forEach(item => item.classList.remove('active'));
        playerBlock.forEach(item => item.classList.remove('active'));
        temp.style.display = 'none';
    }

    playerBtn.forEach((item, i) => item.addEventListener('click', () => {
        diactivationPlayer();
        item.classList.add('active');
        playerBlock[i].classList.add('active');
    }))







    radioPlayerInit();
    videoPlayerInit();
    musicPlayerInit();
});
