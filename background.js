chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes('youtube.com')) {
      console.log('youtube tab updated')

        // Send a message to the content script
        chrome.tabs.sendMessage(tabId, {
            type: 'NEW',
            message: 'New video loaded',
        })
    }  
  })