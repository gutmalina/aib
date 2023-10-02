/** FORM */
/** submit */
const handleSubmit = (e, name, phone) => {
  e.preventDefault();
  setOrderCall(name.value, phone.value, e.target);
};

/** отправить данные на сервер */
const setOrderCall = async (name, phone, form) => {
  const btnOrder = form.querySelector('[name="order"]');
  const prevText = btnOrder.innerHTML;
  btnOrder.innerHTML = "Обработка ...";
  try {
    const response = await fetch("https://gealit.online/api/message/", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-CSRFToken":
          "tOjuNeT0Ga4m24vLQobdfG3fYWkNqpEtRzWLq8LJYmZlzfIrRX4oUL5x7DuXMS7i",
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    });
    const json = await response.json();
    if (response.ok) {
      openPopup(popupForm);
      btnOrder.innerHTML = prevText;
      form.reset();
    }
  } catch (err) {
    openPopup(popupError, err);
    btnOrder.innerHTML = prevText;
  } finally {
    btnOrder.innerHTML = prevText;
  }
};

/** VALIDATION */
/** подставить +7 в поле номера телефона */
function addCodePhone() {
  if (!this.value) {
    this.value = "+7";
    this.classList.remove("form__input_invalid");
    this.nextElementSibling.classList.remove("form__span_visible");
  }
}

/** проверка введенных значений, вызов изменение статуса кнопки */
function handleInputState() {
  const btn = this.form.elements.order;
  const checkbox = this.form.elements.myCheckbox;
  if (this.validity.valid) {
    this.classList.remove("form__input_invalid");
    this.nextElementSibling.classList.remove("form__span_visible");
    toggleBtnState(this.form, btn, checkbox);
  } else {
    this.classList.add("form__input_invalid");
    this.nextElementSibling.classList.add("form__span_visible");
    toggleBtnState(this.form, btn, checkbox);
  }
}

/** изменение статуса кнопки */
const toggleBtnState = (form, btn, checkbox) => {
  if (form.checkValidity() && checkbox.checked) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "");
  }
};

formLead.addEventListener("submit", (e) =>
  handleSubmit(e, nameLeadInput, phoneLeadInput)
);
formContacts.addEventListener("submit", (e) =>
  handleSubmit(e, nameContactsInput, phoneContactsInput)
);
phoneLeadInput.addEventListener("focus", addCodePhone);
phoneLeadInput.addEventListener("input", handleInputState);
nameLeadInput.addEventListener("input", handleInputState);

phoneContactsInput.addEventListener("focus", addCodePhone);
phoneContactsInput.addEventListener("input", handleInputState);
nameContactsInput.addEventListener("input", handleInputState);

checkboxLead.addEventListener("input", () =>
  toggleBtnState(formLead, btnOrder, checkboxLead)
);
checkboxContacts.addEventListener("input", () =>
  toggleBtnState(formContacts, btnOrderCall, checkboxContacts)
);
