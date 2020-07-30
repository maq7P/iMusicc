export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioHeader = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();

    audio.type = 'audio/aac';

    radioStop.disabled = true;

    radioNavigation.addEventListener('change', (e) => {
        const target = e.target;
        const parrent = target.closest('.radio-item');


        radioItem.forEach(item => item.classList.remove('select'));
        parrent.classList.add('select');

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeader.textContent = title;

        const img = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = img;



        audio.src = target.dataset.radioStantion;
        radioStop.disabled = false;


        audio.play();

        radio.classList.add('play');
        radioStop.classList.remove('fa-play');
        radioStop.classList.add('fa-pause');
    });

    radioStop.addEventListener('click', () => {
        if(audio.paused){
            audio.play();
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-pause');
            radio.classList.add('play');
        } else {
            audio.pause();
            radioStop.classList.remove('fa-pause');
            radioStop.classList.add('fa-play');
            radio.classList.remove('play');
        }
    });

};