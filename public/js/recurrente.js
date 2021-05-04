class Recurrente {
  constructor(key) {
    this.publicKey = key
    this.setup()
  }

  static init(key) {
    return new Recurrente(key)
  }

  createCheckout(button) {
    fetch(`http://localhost:3001/api/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-PUBLIC-KEY": this.publicKey,
      }, body: JSON.stringify({
        success_url: this._successUrl(button),
        cancel_url: this._cancelUrl(button),
        items: [{
          price_id: this._priceId(button),
          quantity: this._quantity(button),
        }],
      })
    }).then(function (result) {
      return result.json();
    }).then(function (data) {
      if (data.checkout_url) {
        redirectToCheckout(data.checkout_url)
      } else {
        console.log(data)
      }
    })
  }

  _successUrl(button) {
    return button.getAttribute("data-recurrente-success-url") || this.successUrl
  }

  _cancelUrl(button) {
    return button.getAttribute("data-recurrente-cancel-url") || this.cancelUrl
  }

  _priceId(button) {
    return button.getAttribute("data-recurrente-price-id") || this.priceId
  }

  _quantity(button) {
    return button.getAttribute("data-recurrente-quantity") || this.quantity
  }

  redirectToCheckout(url) {
    window.location = url
  }

  setup() {
    var outerThis = this
    var submitButtons = Array.from(document.querySelectorAll('[data-recurrente-button]'))
    if (submitButtons.length > 0) {
      submitButtons.map((submitButton) => {
        submitButton.addEventListener('click', function () {
          outerThis.createCheckout(submitButton)
        })
      })
    }
  }

}

window.Recurrente = Recurrente
