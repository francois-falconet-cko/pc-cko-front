var country = 'GB';
var currency = 'GBP';
var locale = 'en';

window.onload = function () {
  createPaymentSession(country, currency, locale);
};



$("#customer-location-select").change(function () {
  switch(this.value) {
    case 'BE':
      country = 'BE';
      currency = 'EUR';
      locale = 'en'
      break;
    case 'AT':
      country = 'AT';
      currency = 'EUR';
      locale= 'en'
      break;
    case 'NL':
      country = 'NL';
      currency = 'EUR';
      locale = 'nl'
      break;
    case 'KW':
      country = 'KW';
      currency = 'KWD';
      locale = 'en';
      break;
    case 'PT':
      country = 'PT';
      currency = 'EUR';
      locale = 'pt';
      break;
    case 'PL':
      country = 'PL';
      currency = 'EUR';
      locale = 'en';
      break;
    case 'FR':
        country = 'FR';
        currency = 'EUR';
        locale = 'fr';
        break;
    case 'ES':
        country = 'ES';
        currency = 'EUR';
        locale = 'es';
        break;
    case 'IT':
        country = 'IT';
        currency = 'EUR';
        locale = 'it';
        break;
    default:
      country = 'GB';
      currency = 'GBP';
      locale = 'en';
      // code block
  }
  createPaymentSession(country, currency, locale);
});

async function createPaymentSession(country, currency, locale) {

  $("#successful-payment-message").hide();

  var settings = {
    url: paymentSessionEndpoint,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: buyerEmail,
      name: "Demo Checkout",
      currency: currency,
      amount: 2500,
      reference: new Date().getTime(),
      securePayment: false,
      country: country,
      success_url: frontUrl,
      failure_url: frontUrl,
    },
  };

  $.ajax(settings).done(async function (response) {
    console.log(response);
    const checkoutWebComponents = await CheckoutWebComponents({
      publicKey: publicKey,
      environment: "sandbox",
      locale: locale,
      paymentSession: response,
      onReady: () => {
        console.log("onReady");
      },
      onPaymentCompleted: (component, paymentResponse) => {
        const element = document.getElementById("successful-payment-message");
        element.setAttribute("style", "background-color: #03856a;margin-bottom: 10;border-radius: 10px;color: white;padding: 8;line-height: 1.4;font-weight: 400;");

        element.innerHTML = `
            ${component.name} completed <br>
            Your payment id is: <span class="payment-id">${paymentResponse.id}</span>
          `;
      },
      onChange: (component) => {
        console.log(
          "onChange",
          "isValid: ",
          component.isValid(),
          " for ",
          component.type
        );
      },
      onError: (component, error) => {
        const element = document.getElementById("error-message");

        element.innerHTML = `
            ${component.name} error <br>
            Error occurred: <pre class="error-object">${error}</pre>
          `;
      },
    });

    const payments = checkoutWebComponents.create("payments");

    payments.mount(document.getElementById("payments"));
  });
}