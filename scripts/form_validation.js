const form = document.getElementById("form1");
const submit_button = document.getElementById("submit");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone_number = document.getElementById("number");
const email = document.getElementById("email");
const city = document.getElementById("city");
const post_code = document.getElementById("post_code");
const boulevard = document.getElementById("boulevard");
const street = document.getElementById("street");
const card_number = document.getElementById("card_number");
const expire = document.getElementById("expire");
const cvc = document.getElementById("cvc");
const name_on_card = document.getElementById("name");
const eula = document.getElementById("eula");

console.log(form);

submit_button.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const first_name_value = first_name.value.trim();
  const last_name_value = last_name.value.trim();
  const phone_number_value = phone_number.value.trim();
  const email_value = email.value.trim();
  const city_value = city.value.trim();
  const post_code_value = post_code.value.trim();
  const boulevard_value = boulevard.value.trim();
  const street_value = street.value.trim();
  const card_number_value = card_number.value.trim();
  const expire_value = expire.value.trim();
  const cvc_value = cvc.value.trim();
  const name_on_card_value = name_on_card.value.trim();

  if (name_on_card_value === "") {
    setErrorFor(name_on_card, "Name on card cannot be blank");
  } else if (!validateNameOnCard(name_on_card_value)) {
    setErrorFor(name_on_card, "Name on card is not valid");
  } else {
    setSuccessFor(name_on_card);
  }
  if (cvc_value === "") {
    setErrorFor(cvc, "CVC cannot be blank");
  } else if (!/^[0-9]{3,4}$/.test(cvc_value)) {
    setErrorFor(cvc, "CVC is not valid");
  } else {
    setSuccessFor(cvc);
  }
  if (expire_value === "") {
    setErrorFor(expire, "Expire date cannot be blank");
  } else if (!validateExpiryDate(expire_value)) {
    setErrorFor(expire, "Expire is not valid");
  } else {
    setSuccessFor(expire);
  }
  if (card_number_value === "") {
    setErrorFor(card_number, "Card number cannot be blank");
  } else if (!validateVisa(card_number_value)) {
    setErrorFor(card_number, "Card number is not valid");
  } else {
    setSuccessFor(card_number);
  }
  if (street_value === "") {
    setErrorFor(street, "Street cannot be blank");
  } else {
    setSuccessFor(street);
  }
  if (boulevard_value === "") {
    setErrorFor(boulevard, "Boulevard cannot be blank");
  } else {
    setSuccessFor(boulevard);
  }
  if (post_code_value === "") {
    setErrorFor(post_code, "Post Code cannot be blank");
  } else if (!/^[0-9]{4}$/.test(post_code_value)) {
    setErrorFor(post_code, "Post Code is not valid");
  } else {
    setSuccessFor(post_code);
  }
  if (city_value === "null") {
    setErrorFor(city, "City cannot be blank");
  } else {
    setSuccessFor(city);
  }
  if (email_value === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(email_value)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (phone_number_value === "") {
    setErrorFor(phone_number, "Phone number cannot be blank");
  } else if (!validatePhone(phone_number_value)) {
    setErrorFor(phone_number, "Phone number is not valid");
  } else {
    setSuccessFor(phone_number);
  }
  if (last_name_value === "") {
    setErrorFor(last_name, "Name cannot be blank");
  } else if (!validateName(last_name_value)) {
    setErrorFor(last_name, "Name is not valid");
  } else {
    setSuccessFor(last_name);
  }
  if (first_name_value === "") {
    setErrorFor(first_name, "Name cannot be blank");
  } else if (!validateName(first_name_value)) {
    setErrorFor(first_name, "Name is not valid");
  } else {
    setSuccessFor(first_name);
  }

  const checkbox = document.getElementById("checkbox");
  if (eula.checked === false) {
    setErrorAgreement(eula, "Please consent to the agreement");
  } else {
    setSuccessAgreement(eula);
  }

  if (
    first_name.parentElement.classList.contains("success") &&
    last_name.parentElement.classList.contains("success") &&
    phone_number.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    city.parentElement.classList.contains("success") &&
    post_code.parentElement.classList.contains("success") &&
    boulevard.parentElement.classList.contains("success") &&
    street.parentElement.classList.contains("success") &&
    card_number.parentElement.classList.contains("success") &&
    expire.parentElement.classList.contains("success") &&
    cvc.parentElement.classList.contains("success") &&
    name_on_card.parentElement.classList.contains("success") &&
    checkbox.classList.contains("success")
  ) {
    window.location.replace("./index.html");
    console.log("Success");
  }
}

function setErrorFor(input, message) {
  const container_1 = input.parentElement;
  const small = container_1.querySelector("small");

  small.innerText = message;
  container_1.className = "container-1 error";

  input.focus();
}

function setSuccessFor(input) {
  const container_1 = input.parentElement;

  container_1.className = "container-1 success";
}

function setErrorAgreement(eula, message) {
  const text = document.getElementById("agree");
  const checkbox = document.getElementById("checkbox");

  text.innerText = message;
  checkbox.classList = "purchase-section error";

  eula.focus();
}

function setSuccessAgreement(eula) {
  const checkbox = document.getElementById("checkbox");

  checkbox.classList = "purchase-section success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function validateExpiryDate(expireDate) {
  return /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/.test(expireDate);
}

function validateName(name) {
  return /^[A-Z][a-zA-z]{2,50}$/.test(name);
}

function validatePhone(phone) {
  return /^08[7-9][0-9]{7}$/.test(phone);
}

function validateNameOnCard(name) {
  return /^[A-Z](?:[a-z]|\b[,.'-]\b)+(?: [A-Z](?:[a-z]|\b[,.'-]\b)+)*$/.test(
    name
  );
}

function validateVisa(card) {
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  return visaRegEx.test(card) || mastercardRegEx.test(card);
}
