document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.querySelector('[data-recurrente-button]')
  if (submitButton) {
    submitButton.addEventListener('click', function () {
      rcrntCheckout(submitButton.getAttribute("data-recurrente-price-id"))
    })
  }
});

function rcrntCheckout(price_id) {
  fetch('/api/checkouts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify({
      prices: [price_id],
    })
  }).then(function (result) {
    return result.json();
  }).then(function (data) {
    if (data.checkout_url) {
      rcrntRedirectToCheckout(data.checkout_url)
    } else {
      console.log(data)
    }
  })
}

function rcrntRedirectToCheckout(url) {
  window.location = url
}
