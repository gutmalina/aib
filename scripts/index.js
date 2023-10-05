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
  filterCards(e.target.innerHTML);
  highlightMenuLink(activeMenuLink, e.target);
  menuHeader.classList.remove("header__menu_visible");
  editTextLogo();
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
    const tagCard = slide.getAttribute('name')
    if (tagMenu === "ГЛАВНАЯ") {
      containerSlides.appendChild(slide)
      swiper.update()
    } else if (tagCard !== tagMenu) {
      slide.remove()
      swiper.update()
    } else {
      containerSlides.appendChild(slide)
      swiper.update()
    }
  });
};

btnBurger.addEventListener("click", handleClickBurger);
menuLinks.forEach(link=>{
  link.addEventListener('click', (e)=> {
    e.preventDefault()
    handleClickMenu(e)
  })
})
