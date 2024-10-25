(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log('content.js received message', request)

        const { message, type } = request;

        if(type === 'NEW') {
            newVideoLoaded();
        }
    })

    const newVideoLoaded = () => {
        const repeatBtnExists = document.getElementById('repeat-btn')[0];

        if(!repeatBtnExists) {
            // Add the repeat button
        }
    }
})()