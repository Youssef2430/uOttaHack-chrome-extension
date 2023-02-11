chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getPrices") {
    // Get all elements with class "price"
    var prices = document.getElementsByClassName("price");
    var pricesArray = [];
    for (var i = 0; i < prices.length; i++) {
      pricesArray.push(prices[i].innerHTML);
    }
    sendResponse({ prices: pricesArray });
  }
});

