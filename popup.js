// Show quote in popup upon clicking the Generate button
document.getElementById("generate-quote").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getQuote" }, (quote) => {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerText = quote;
  });
});
