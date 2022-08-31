let color = '#3aa757';

chrome.runtime.onInstalled.addListener(
 () => {
    chrome.storage.sync.set({color}, function () {
      console.log(`Default color set to green ${color}`);
    });
  }
);