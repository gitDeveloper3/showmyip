// Send a message to the background script to get the IP address
browser.runtime.sendMessage({ type: "getIpAddress" })
  .then(response => {
    if (response.ip) {
      document.getElementById('ip').textContent = response.ip;
    } else {
      document.getElementById('ip').textContent = 'Error fetching IP address.';
    }
  });
