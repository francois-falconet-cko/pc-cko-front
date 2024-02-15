/* global CheckoutWebComponents */
const themes = {
  default: {},
  terminal: {
    // Background Color
    colorBackgroundPrimary: '#17201E',
    colorBackgroundDisabled: '#f7f7f7',
    colorBackgroundError: '#fff3f5',
    colorBackgroundActionPrimary: '#00CC2D',
    colorBackgroundActionDisabled: '#f0f0f0',

    // Text Color
    colorTextPrimary: '#00CC2D',
    colorTextDisabled: '#717171',
    colorTextError: '#FF90A3',
    colorTextActionPrimary: '#17201E',
    colorTextActionSecondary: '#00CC2D',

    // Border Color
    colorBorderPrimary: '#8a8a8a',
    colorBorderSecondary: '#d9d9d9',
    colorBorderFocus: '#00CC2D',
    colorOutlineFocus: '#00CC2D',
    colorBorderError: '#FF90A3',

    // Icon Color
    colorIconPrimary: '#00CC2D',
    colorIconDisabled: '#8a8a8a',
    colorIconAction: '#717171',
    colorIconError: '#FF90A3',
  },
  runway: {
    title: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    subheading: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    body: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '15px',
      lineHeight: '18px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    footnote: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    button: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    input: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    label: {
      fontFamily: '"Times New Roman", serif',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: 0,
    },

    // Spacing
    spacing: ['2px', '10px', '12px', '15px', '18px', '24px', '32px', '40px'],

    // Border
    borderRadius: ['6px', '12px'],
    borderWidth: '1px',

    // Background Color
    colorBackgroundPrimary: '#FFFFFF',
    colorBackgroundDisabled: '#f7f7f7',
    colorBackgroundError: '#fff3f5',
    colorBackgroundActionPrimary: '#0b5ff0',
    colorBackgroundActionDisabled: '#f0f0f0',

    // Text Color
    colorTextPrimary: '#000000',
    colorTextDisabled: '#727272',
    colorTextError: '#ad283e',
    colorTextActionPrimary: '#ffffff',
    colorTextActionSecondary: '#0b5ff0',

    // Border Color
    colorBorderPrimary: '#8a8a8a',
    colorBorderSecondary: '#d9d9d9',
    colorBorderFocus: '#0b5ff0',
    colorOutlineFocus: 'rgba(11, 95, 240, 0.5)',
    colorBorderError: '#ad283e',

    // Icon Color
    colorIconPrimary: '#000000',
    colorIconDisabled: '#8a8a8a',
    colorIconAction: '#0b5ff0',
    colorIconError: '#ad283e',
  },
  clouds: {
    title: {
      fontFamily: 'cursive',
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    subheading: {
      fontFamily: 'cursive',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    body: {
      fontFamily: 'cursive',
      fontSize: '15px',
      lineHeight: '18px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    footnote: {
      fontFamily: 'cursive',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    button: {
      fontFamily: 'cursive',
      fontSize: '30px',
      lineHeight: '20px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    input: {
      fontFamily: 'cursive',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: 0,
    },
    label: {
      fontFamily: 'cursive',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: 0,
    },

    // Background Color
    colorBackgroundPrimary: '#FBF6FF',
    colorBackgroundDisabled: '#f7f7f7',
    colorBackgroundError: '#fff3f5',
    colorBackgroundActionPrimary: '##a096d7',
    colorBackgroundActionDisabled: '#f0f0f0',

    // Text Color
    colorTextPrimary: '#461E67',
    colorTextDisabled: '#AFAFAF',
    colorTextError: '#E48181',
    colorTextActionPrimary: '#FFFFFF',
    colorTextActionSecondary: '#9A22FF',

    // Border Color
    colorBorderPrimary: '#E8CEF6',
    colorBorderSecondary: '#AFAFAF',
    colorBorderFocus: '#9A22FF',
    colorOutlineFocus: '#9A22FF',
    colorBorderError: '#FF90A3',

    // Icon Color
    colorIconPrimary: '#461E67',
    colorIconDisabled: '#AFAFAF',
    colorIconAction: '#9A22FF',
    colorIconError: '#FF90A3',
  },
};


var country = 'GB';
var currency = 'GBP';
var locale = 'en';
var theme = themes.default;

window.onload = function () {
  createPaymentSession(country, currency, locale, theme);
};


$("#theme-select").change(function () {
  switch(this.value) {
    case 'default':
      theme = themes.default
      break;
    case 'clouds':
      theme = themes.clouds
      break;
    case 'terminal':
      theme = themes.terminal
      break;
    case 'runway':
      theme = themes.runway
      break;
    default:
        theme = themes.default
  }
  createPaymentSession(country, currency, locale, theme);
});


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
    case 'VI':
      country = 'VI';
      currency = 'VND';
      locale = 'vi';
        break;
    default:
      country = 'GB';
      currency = 'GBP';
      locale = 'en';
      // code block
  }
  createPaymentSession(country, currency, locale, theme);
});

let oldPayments;
async function createPaymentSession(country, currency, locale, theme) {
  oldPayments?.unmount();
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

    const checkoutWebComponents = await CheckoutWebComponents({
      publicKey: publicKey,
      environment: "sandbox",
      locale: locale,
      appearance: theme,
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
    oldPayments = payments;
    payments.mount(document.getElementById("payments"));
  });
}
