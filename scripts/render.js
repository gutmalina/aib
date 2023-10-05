const createSlideAbout = (item) => {
  const slide = slideAboutTemplate.cloneNode(true);
  slide.querySelector('.card__tag').innerHTML = item.type
  slide.querySelector('.card__title').innerHTML = item.title
  slide.querySelector('.card__link').innerHTML = item.link
  const containerList = slide.querySelector('.card__list')
  item.list.map(li=> {
    const slideLi = document.createElement('li')
    slideLi.setAttribute('class', 'card__li')
    slideLi.innerHTML = li
    containerList.appendChild(slideLi)
  })
  return slide;
}

const createSlideProjectLead = (item) => {
  const slide = slideProjectLeadTemplate.cloneNode(true);
  slide.querySelector('.card__tag').innerHTML = item.type.slice(0, 7)
  slide.querySelector('.card__link').innerHTML = item.link
  const containerList = slide.querySelector('.card__container')
  item.content.map(el=> {
    const title = document.createElement('h2')
    title.setAttribute('class', 'card__title card__title_project-lead')
    title.innerHTML = el.title
    containerList.appendChild(title)
    const subtitle = document.createElement('h3')
    subtitle.setAttribute('class', 'card__title card__title_about')
    subtitle.innerHTML = el.subtitle
    containerList.appendChild(subtitle)
  })
  return slide;
}

const createSlideNews = (item) => {
  const slide = slideNewsTemplate.cloneNode(true);
  slide.querySelector('.card__title').innerHTML = item.title
  slide.querySelector('.card__subtitle').innerHTML = item.title_small
  slide.querySelector('.card__tag').innerHTML = item.type
  slide.querySelector('.card__link').innerHTML = item.link

  return slide;
}

const createSlideProject = (item) => {
  const slide = slideProjectTemplate.cloneNode(true);
  slide.querySelector('.card__tag').innerHTML = item.type
  slide.querySelector('.card__title').innerHTML = item.title
  slide.querySelector('.card__subtitle').innerHTML = item.about
  slide.querySelector('.card__title_author').innerHTML = item.title_author
  slide.querySelector('.card__link').innerHTML = item.link
  const containerList = slide.querySelector('.card__list')
  item.list.map(li=> {
    const slideLi = document.createElement('li')
    slideLi.setAttribute('class', 'card__li')
    slideLi.innerHTML = li
    containerList.appendChild(slideLi)
  })
  const containerAuthorList = slide.querySelector('.card__list_author')
  item.list_author.map(li=> {
    const slideLi = document.createElement('li')
    slideLi.setAttribute('class', 'card__li')
    slideLi.innerHTML = li
    containerAuthorList.appendChild(slideLi)
  })
  return slide;
}

const createSlideStaff = (item) => {
  const slide = slideStaffTemplate.cloneNode(true);
  slide.querySelector('.card__tag').innerHTML = item.type
  slide.querySelector('.card__title').innerHTML = item.title
  slide.querySelector('.card__subtitle').innerHTML = item.post
  slide.querySelector('.card__title_author').innerHTML = item.title_projects
  slide.querySelector('.card__link').innerHTML = item.link
  const containerList = slide.querySelector('.card__list')
  item.list.map(li=> {
    const slideLi = document.createElement('li')
    slideLi.setAttribute('class', 'card__li')
    slideLi.innerHTML = li
    containerList.appendChild(slideLi)
  })
  return slide;
}

const renderInitialSlides = (element, createSlide) => {
  const slide = createSlide(element)
  containerSlides.appendChild(slide);
};


const render = () => {
  slideArray.forEach(slide=>{
    if(slide.type === 'О НАС'){
      renderInitialSlides(slide, createSlideAbout)
    }else if(slide.type === 'ПРОЕКТЫ_LEAD'){
      renderInitialSlides(slide, createSlideProjectLead)
    }else if(slide.type === 'НОВОСТИ'){
      renderInitialSlides(slide, createSlideNews)
    }else if(slide.type === 'ПРОЕКТЫ'){
      renderInitialSlides(slide, createSlideProject)
    }else if(slide.type === 'НАША КОМАНДА'){
      renderInitialSlides(slide, createSlideStaff)
    }else{
      return
    }
    });
    return slides = Array.from(document.querySelectorAll('.swiper-slide'))
}

render();

