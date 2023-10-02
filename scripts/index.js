/** DOWNLOAD FIRST */
const downloadFirst = () => {
  activeFirstMenuLink();
  editTextBtn();
};

/** поменять текст кнопки при первой загрузке */
const editTextBtn = () => {
  if (screenWidth >= 764) {
    return Array.from(btnCall).map((item) => {
      return (item.innerHTML = "ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСТУЛЬТАЦИЮ");
    });
  }
};

/** показать первый пункт menu при первой загрузке */
const activeFirstMenuLink = () => {
  const firstMenuLink = header.querySelector(".header__link");
  firstMenuLink.classList.add("header__link_active");
};

downloadFirst();

/** HEADER */
/** показать или скрыть menu-burger */
const handleClickBurger = () => {
  menuHeader.classList.toggle("header__menu_visible");
  editTextLogo();
};

/** выделить пункт меню, увеличить шрифт */
const highlightMenuLink = (activeItem, item) => {
  activeItem.classList.remove("header__link_active");
  item.classList.add("header__link_active");
};

/** click по пункту menu */
const handleClickMenu = (e) => {
  const activeMenuLink = header.querySelector(".header__link_active");
  e.preventDefault();
  if (e.target.tagName === "A") {
    filterCards(e.target.innerHTML);
    highlightMenuLink(activeMenuLink, e.target);
    menuHeader.classList.remove("header__menu_visible");
    editTextLogo();
  }
};

/** показывать, скрывать текст логотипа при ширине 764-1024 */
const editTextLogo = () => {
  if (screenWidth >= 764 && screenWidth < 1024) {
    textLogoHeader.classList.toggle("logo__subtitle_invisible");
  }
};

/** фильтр карточек при клике на пунк меню*/
const filterCards = (tagMenu) => {
  slides.map((slide) => {
    const tagCard = slide
      .querySelector(".content__tag")
      .innerHTML.toLocaleLowerCase();

    if (tagMenu === "ГЛАВНАЯ") {
      containerSwiper.appendChild(slide)
      swiper.update()
    } else if (tagCard !== tagMenu.toLocaleLowerCase()) {
      slide.remove()
      swiper.update()
    } else {
      containerSwiper.appendChild(slide)
      swiper.update()
    }
  });
};

btnBurger.addEventListener("click", handleClickBurger);
menuHeader.addEventListener("click", (e) => handleClickMenu(e));
