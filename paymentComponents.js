createPaymentSession();

async function createPaymentSession() {

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
      currency: "EUR",
      amount: 2500,
      reference: new Date().getTime(),
      securePayment: true,
      country: "GB",
      success_url: frontUrl,
      failure_url: frontUrl,
    },
  };

  $.ajax(settings).done(async function (response) {
    console.log(response);
    const checkoutWebComponents = await CheckoutWebComponents({
      publicKey: publicKey,
      environment: "sandbox",
      locale: "en-GB",
      paymentSession: response,
      onReady: () => {
        console.log("onReady");
      },
      onPaymentCompleted: (component, paymentResponse) => {
        const element = document.getElementById("successful-payment-message");

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