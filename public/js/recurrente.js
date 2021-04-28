document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.querySelector('#submit')
  if (submitButton) {
    submitButton.addEventListener('click', function () {
      redirectToCheckout()
    })
  }
});

function redirectToCheckout() {
  var formdata = new FormData();
  formdata.append("account_id", "98961cf7");
  formdata.append("checkout[price_id]", "1c8e3c3e");
  formdata.append("checkout[success_url]", `${window.location.origin}/success`);
  formdata.append("checkout[cancel_url]", `${window.location.origin}/cancel`);

  fetch('http://localhost:5000/api/checkouts', {
    method: "POST",
    body: formdata,
  }).then(function (result) {
    return result.json();
  })
  .then(function (json) {
    window.location = json.checkout_url
  });
}
