const screenWidth = window.screen.width;
const btnCall = document.querySelectorAll(".btn__call");
const header = document.querySelector(".header");
const btnBurger = header.querySelector(".header__burger");
const menuHeader = header.querySelector(".header__menu");
const menuLinks = Array.from(header.querySelectorAll(".header__link"))
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

const containerSlides = document.querySelector('.swiper-wrapper')
let slides = []
const widthContainerSlides = containerSlides.clientWidth
// const widthSlide = document.querySelector('.card').clientWidth
const slideAboutTemplate = document.querySelector('#about').content;
const slideProjectLeadTemplate = document.querySelector('#project_lead').content;
const slideNewsTemplate = document.querySelector('#news').content;
const slideProjectTemplate = document.querySelector('#project').content;
const slideStaffTemplate = document.querySelector('#staff').content;
const slideArray = [
  {
    id: 0,
    type: 'О НАС',
    title: 'Цифровая трансформация и импортозамещение',
    list: ['Серверные ОС', 'Офисный пакет', 'ОС рабочих станций', 'Почтовые сервера', 'Системы виртуализации', 'Системы видео конференцсвязи', 'Системы виртуальных рабочих столов', 'Корпоративные мессенджеры'],
    link: 'Показать еще'
  },
  {
    id: 1,
    type: 'ПРОЕКТЫ_LEAD',
    content: [
      {
        id: 0,
        title: '50+',
        subtitle: 'выполненных проектов'
      },
      {
        id: 1,
        title: '15',
        subtitle: 'лет опыта на рынке'
      },
      {
        id: 2,
        title: '30+',
        subtitle: 'сертифицированных специалистов'
      }
    ],
    link: 'Показать проекты'
  },
  {
    id: 2,
    type: 'НОВОСТИ',
    title: 'В компании по производству лекарств перевели регламентированный учет из 1С УПП на 1С ERP',
    title_small: [],
    link: 'Показать еще'
  },
  {
    id: 3,
    type: 'ПРОЕКТЫ',
    title: 'АзотМайнингСервис',
    about: 'Производство взрывчатых веществ, буро-взрывных работ',
    list: ['Переход с 1С:УПП на систему 1С:ERP', 'Реализованный функционал:'],
    title_author: 'Руководитель проекта:',
    list_author: ['Чернышева Дарья'],
    link: 'Показать еще'
  },
  {
    id: 4,
    type: 'НАША КОМАНДА',
    title: 'Чернышева Дарья',
    post: 'Руководитель направления',
    title_projects: 'Проекты:',
    list: ['АзотМайнингСервис', 'АзотМайнингСервис', 'БОШ РЕКСРОТ'],
    link: 'Показать больше'
  },
  {
    id: 5,
    type: 'НОВОСТИ',
    title: 'Цифровая трансформация и импортозамещение',
    title_small: ['сделали крутую штуку)))'],
    link: 'Показать еще'
  },
  {
    id: 6,
    type: 'НАША КОМАНДА',
    title: 'Овчаренко Алина',
    post: 'Руководитель направления',
    title_projects: 'Проекты:',
    list: ['АзотМайнингСервис', 'БОШ РЕКСРОТ', 'Мясницкий ряд'],
    link: 'Показать больше'
  },
  {
    id: 7,
    type: 'ПРОЕКТЫ',
    title: 'Ульяновский Сахарный Завод',
    about: 'Переработка сахарной свеклы',
    list: ['Переход с 1С:УПП на систему 1С:ERP', 'Реализованный функционал:'],
    title_author: 'Руководитель проекта:',
    list_author: ['Чернышева Дарья'],
    link: 'Показать еще'
  },
]
