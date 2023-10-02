/** клик по ссылке карточки, открывает попап */
function handleClickCardLinks(e) {
  e.preventDefault();
  e.stopPropagation();
  const targetId = e.target.getAttribute("data-target");
  const popup = document.getElementById(targetId);
  if (popup) {
    openPopup(popup);
  }
}

/** открыть попап, повесить слушателей на кнопку закрыть и подложку */
const openPopup = (popup, err) => {
  popup.classList.add("popup__opened");
  const btnClose = popup.querySelector(".btn__close");
  const backgroundPopup = popup.querySelector(".popup__background");
  btnClose.addEventListener("click", () => handleClosePopup(popup));
  backgroundPopup.addEventListener("click", () => handleClosePopup(popup));
  if (popup.querySelector(".btn__go")) {
    const btnGo = popup.querySelector(".btn__go");
    btnGo.addEventListener("click", () => handleClosePopup(popup));
  }
  if (err) {
    const error = popup.querySelector(".popup-form__error");
    error.innerHTML = err;
  }
};

/** закрыть попап, удалить слушатель с кнопки закрыть и background */
const handleClosePopup = (popup) => {
  const btnClose = popup.querySelector(".btn__close");
  const backgroudPopup = popup.querySelector(".popup__background");
  btnClose.removeEventListener("click", handleClosePopup);
  backgroudPopup.removeEventListener("click", handleClosePopup);
  popup.classList.remove("popup__opened");
};

/** закрыть попап по Escape */
const handleCloseEsc = (e) => {
  const popup = Array.from(popups).filter((item) =>
    item.classList.contains("popup__opened")
  );
  if (e.key === "Escape") {
    if (popup.length) {
      handleClosePopup(popup[0]);
    }
  }
};

popupLinks.forEach(function (link) {
  link.addEventListener("click", handleClickCardLinks);
});
document.addEventListener("keydown", (e) => handleCloseEsc(e));
