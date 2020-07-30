export const videoPlayerInit = () => {
    const videoPlayer            = document.getElementsByClassName('video-player')[0],
          videoButtonPlay        = document.getElementsByClassName('video-button__play')[0],
          videoButtonStop        = document.getElementsByClassName('video-button__stop')[0],
          videoTimePassed        = document.getElementsByClassName('video-time__passed')[0],
          videoProgress          = document.getElementsByClassName('video-progress')[0],
          videoTimeTotal         = document.getElementsByClassName('video-time__total')[0],
          videoFullscreen        = document.getElementsByClassName('video-fullscreen')[0],
          videoVolume            = document.getElementsByClassName('video-volume')[0];

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    }

    const togglePlay = () => {
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }

            toggleIcon();

    }

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon();
    }
    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);
    videoButtonStop.addEventListener('click', stopPlay);

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime,
              duration    = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed  = (Math.floor(currentTime / 60)) < 10 ? '0' + (Math.floor(currentTime / 60)) : (Math.floor(currentTime / 60)),
            secondsPassed = (Math.floor(currentTime % 60)) < 10 ? '0' + (Math.floor(currentTime % 60)) : (Math.floor(currentTime % 60));
            
        let minuteTotal   = (Math.floor(duration / 60)) < 10 ? '0' + (Math.floor(duration / 60)) : (Math.floor(duration / 60)),
            secondsTotal  = (Math.floor(duration % 60)) < 10 ? '0' + (Math.floor(duration % 60)) : (Math.floor(duration % 60));

            console.log(minutePassed, secondsPassed);
            

        videoTimeTotal.textContent = `${minuteTotal}:${secondsTotal}`;
        videoTimePassed.textContent = `${minutePassed}:${secondsPassed}`;
    });

    videoProgress.addEventListener('input', () => {
        const duration  = videoPlayer.duration;
        const value     = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

    videoFullscreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
    });

    videoVolume.value = videoPlayer.volume * 100;
    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    });
};
