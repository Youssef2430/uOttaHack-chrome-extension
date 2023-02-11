chrome.runtime.sendMessage({ action: "getPrices" }, function(response) {
  // Switch the prices
  var prices = document.getElementsByClassName("a-offscreen");
  for (var i = 0; i < prices.length; i++) {
    // prices[i].innerHTML = response.prices[i];
    prices[i].innerHTML = "400";
  }
});
  