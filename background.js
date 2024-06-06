chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle messages sent from content scripts or popup
  if (message.action === "getQuote") {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => sendResponse(`${data.content} - By ${data.author}`));
    // Return true to indicate that the response function is called asynchronously.
    return true;
  }
});
