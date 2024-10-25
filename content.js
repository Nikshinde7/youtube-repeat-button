(() => {
    let youtubeLeftControls, youtubePlayer;

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log('content.js received message', request)

        const { type } = request;

        if(type === 'NEW') {
            newVideoLoaded();
        }
    })

    const newVideoLoaded = async () => {
        const repeatBtnExists = document.getElementById('repeat-btn');

        if(!repeatBtnExists) {
            const repeatBtn = document.createElement("img");

            // We will need a parent container with which we can control the alignment of the repeat button
            const repeatBtnContainer = document.createElement('button');
            repeatBtnContainer.id = 'repeat-btn-container';
            repeatBtnContainer.className = 'ytp-button';
            repeatBtnContainer.style.marginLeft = '5px';
            
            repeatBtn.src = chrome.runtime.getURL('assets/repeat.svg');
            repeatBtn.id = 'repeat-btn';
            repeatBtn.title = 'Repeat the current playing video';
            repeatBtn.style.width = '22px';
            repeatBtn.style.height = '100%';
            repeatBtn.style.cursor = 'pointer';

            youtubeLeftControls = document.getElementsByClassName('ytp-right-controls')[0];
            youtubePlayer = document.getElementsByClassName('video-stream')[0];

            repeatBtnContainer.appendChild(repeatBtn);
            youtubeLeftControls.appendChild(repeatBtnContainer);
            repeatBtn.addEventListener('click', repeatVideo);
        }
    }

    const repeatVideo = () => {
        youtubePlayer.loop = true;
    }

    newVideoLoaded();
})()