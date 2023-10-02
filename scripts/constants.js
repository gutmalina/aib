const screenWidth = window.screen.width;
const slides = Array.from(document.querySelectorAll('.swiper-slide'))
const containerSwiper = document.querySelector('.swiper-wrapper')
const widthContainer = containerSwiper.clientWidth
const widthSlide = document.querySelector('.content__card').clientWidth
const btnCall = document.querySelectorAll(".btn__call");
const header = document.querySelector(".header");
const btnBurger = header.querySelector(".header__burger");
const menuHeader = header.querySelector(".header__menu");
const textLogoHeader = header.querySelector(".logo__subtitle");
const tags = Array.from(header.querySelectorAll(".header__link")).map(
  (item) => item.innerHTML
);
const popups = document.querySelectorAll(".popup");
const popupForm = document.querySelector("#popup-form");
const popupError = document.querySelector("#popup-error");
const popupLinks = document.querySelectorAll(".popup-link");
/** форма в секции Lead */
const formLead = document.forms.lead;
const nameLeadInput = formLead.elements.name;
const phoneLeadInput = formLead.elements.phone;
const btnOrder = formLead.elements.order;
const checkboxLead = formLead.elements.myCheckbox;
/** форма в секции Contacts */
const formContacts = document.forms.contacts;
const nameContactsInput = formContacts.elements.name;
const phoneContactsInput = formContacts.elements.phone;
const btnOrderCall = formContacts.elements.order;
const checkboxContacts = formContacts.elements.myCheckbox;
const tokenInput = formLead.elements.csrfmiddlewaretoken;
