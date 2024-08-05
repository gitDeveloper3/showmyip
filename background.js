// This script fetches the IP address from an external service
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "getIpAddress") {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => sendResponse({ ip: data.ip }))
        .catch(error => sendResponse({ error: error.message }));
  
      // Return true to indicate that sendResponse will be called asynchronously
      return true;
    }
  });
  