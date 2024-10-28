// const { fa } = require("intl-tel-input/i18n");

const formInput = document.querySelector("#formInput");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const phone = document.querySelector("#phone");
const emailInput = document.querySelector("#emailInput");
const addressInput = document.querySelector("#addressInput");
const addressInput2 = document.querySelector("#addressInput2");
const cityInput = document.querySelector("#cityInput");
const stateInput = document.querySelector("#stateInput");
const zipInput = document.querySelector("#zipInput");
const countryInput = document.querySelector("#countryInput");
const bankInput = document.querySelector("#bankInput");

// Error messages
const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const phoneError = document.querySelector("#phoneError");
const emailError = document.querySelector("#emailError");

// form validation
let firstNameValidate = false;
let lastNameValidate = false;
let phoneValidate = false;
let emailValidate = false;
let addressValidate = false;
let addressValidate2 = true;
let cityValidate = false;
let stateValidate = false;
let zipValidate = true;
let countryValidate = false;
let bankValidate = false;
let formValidation = false;

// form event
firstName.addEventListener("input", firstNameFunc);
lastName.addEventListener("input", lastNameFunc);
phone.addEventListener("input", phoneFunc);
emailInput.addEventListener("input", emailFunc);
addressInput.addEventListener("input", addressFunc);
addressInput2.addEventListener("input", addressFunc2);
cityInput.addEventListener("input", cityFunc);
stateInput.addEventListener("input", stateFunc);
zipInput.addEventListener("input", zipFunc);
countryInput.addEventListener("input", countryFunc);
bankInput.addEventListener("input", bankFunc);

function firstNameFunc() {
  if (firstName.value.length < 2) {
    firstNameValidate = false;
    firstError.classList.remove("hidden");
    console.log(firstNameValidate);
  } else {
    firstNameValidate = true;
    firstError.classList.add("hidden");
    console.log(firstNameValidate);
  }
}

function lastNameFunc() {
  if (lastName.value.length < 2) {
    lastNameValidate = false;
    lastError.classList.remove("hidden");
    console.log(lastNameValidate);
  } else {
    lastNameValidate = true;
    lastError.classList.add("hidden");
    console.log(lastNameValidate);
  }
}

function phoneFunc() {
  // const phoneRegex = /^\d{10,}$/;
  if (phone.value.length < 10) {
    phoneValidate = false;
    phoneError.classList.remove("hidden");
    console.log(phoneValidate);
  } else {
    phoneValidate = true;
    phoneError.classList.add("hidden");
    console.log(phoneValidate);
  }
}

function emailFunc() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailValidate = false;
    emailError.classList.remove("hidden");
    console.log(emailValidate);
  } else {
    emailValidate = true;
    emailError.classList.add("hidden");
    console.log(emailValidate);
  }
}

function addressFunc() {
  if (addressInput.value.length < 2) {
    addressValidate = false;
    console.log(addressValidate);
  } else {
    addressValidate = true;
    console.log(addressValidate);
  }
}

function addressFunc2() {
  if (addressInput2.value.length < 2) {
    addressValidate2 = true;
    console.log(addressValidate2);
  } else {
    addressValidate2 = true;
    console.log(addressValidate2);
  }
}

function cityFunc() {
  if (cityInput.value.length < 2) {
    cityValidate = false;
    console.log(cityValidate);
  } else {
    cityValidate = true;
    console.log(cityValidate);
  }
}

function stateFunc() {
  if (stateInput.value.length < 2) {
    stateValidate = false;
    console.log(stateValidate);
  } else {
    stateValidate = true;
    console.log(stateValidate);
  }
}

function zipFunc() {
  if (zipInput.value.length < 5) {
    zipValidate = true;
    console.log(zipValidate);
  } else {
    zipValidate = true;
    console.log(zipValidate);
  }
}

function countryFunc() {
  if (countryInput.value.length < 2) {
    countryValidate = false;
    console.log(countryValidate);
  } else {
    countryValidate = true;
    console.log(countryValidate);
  }
}

function bankFunc() {
  if (bankInput.value.length < 2) {
    bankValidate = false;
    console.log(bankValidate);
  } else {
    bankValidate = true;
    console.log(bankValidate);
  }
}

function validationForm() {
  if (
    firstNameValidate &&
    lastNameValidate &&
    phoneValidate &&
    emailValidate &&
    addressValidate &&
    addressValidate2 &&
    cityValidate &&
    stateValidate &&
    zipValidate &&
    countryValidate &&
    bankValidate
  ) {
    formValidation = true;
  } else {
    if (!firstNameValidate) {
      firstName.focus();
    } else if (!lastNameValidate) {
      lastName.focus();
    } else if (!phoneValidate) {
      phone.focus();
    } else if (!emailValidate) {
      emailInput.focus();
    } else if (!addressValidate) {
      addressInput.focus();
    } else if (!addressValidate2) {
      addressInput2.focus();
    } else if (!cityValidate) {
      cityInput.focus();
    } else if (!stateValidate) {
      stateInput.focus();
    } else if (!zipValidate) {
      zipInput.focus();
    } else if (!countryValidate) {
      countryInput.focus();
    } else if (!bankValidate) {
      bankInput.focus();
    }
    formValidation = false;
  }
}

// form submit event
// formInput.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   validationForm();
//   if (formValidation) {
//     // Gather data to send to the server
//     const formData = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//       phone: phone.value,
//       email: emailInput.value,
//       address: addressInput.value,
//       address2: addressInput2.value,
//       city: cityInput.value,
//       state: stateInput.value,
//       zip: zipInput.value,
//       country: countryInput.value,
//       bank: bankInput.value,
//     };
//   }
// });
