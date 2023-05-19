/*document.addEventListener('DOMContentLoaded', function() {
    var volumeInput = document.getElementById('volumegerador');
    volumeInput.addEventListener('input', function() {
      var volume = parseFloat(volumeInput.value);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, {
          code: `
            var mediaElements = document.querySelectorAll('video, audio');
            for (var i = 0; i < mediaElements.length; i++) {
              mediaElements[i].volume = ${volume};
            }
          `
        });
      });
    });
  });
  
*/

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var mediaElements = document.querySelectorAll('video, audio');
    for (var i = 0; i < mediaElements.length; i++) {
        mediaElements[i].volume = message.volume;
    }
});
