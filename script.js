// ---------------------------Burger-menu----------------------------
const burger = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.header-bottom a');
const sections = document.querySelectorAll('section');

navLink.forEach(link => {
  link.addEventListener('click', (e) => {

    sections.forEach((section) => {
      if (link.getAttribute('href') === `#${section.id}`) {
        section.style.paddingTop = header.clientHeight ;
      } else {
        section.style.paddingTop = '';
      }
    })
  })
})

burger.addEventListener('click', () => {
  header.classList.toggle('open');
  if(header.classList.contains('open')) {
    document.body.style.overflowY = 'hidden';
  }
  navLink.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        header.classList.remove('open');
      }, 500)
      
      sections.forEach((section) => {
        if (item.getAttribute('href') === `#${section.id}`) {
          section.style.paddingTop = 100 +'px';
        }
      })
    })
  })
})


// ---------------------------Слайдер----------------------------
const swiper = new Swiper('.objects-item-imgs.swiper', {
  navigation: {
    nextEl: '.objects-item-imgs .swiper-button-next',
    prevEl: '.objects-item-imgs .swiper-button-prev',
  },
  loop: true,
});

const certificateSwiper = new Swiper('.certificates-items.swiper', {
  navigation: {
    nextEl: '.certificates-items .swiper-button-next',
    prevEl: '.certificates-items .swiper-button-prev',
  },
  spaceBetween: 30,
  slidesPerView: 3,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    508: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
})
// ---------------------------Слайдер----------------------------
const aboutSection = document.querySelector('.about');
const aboutList = document.querySelector('.about-list');
const inDesktop = window.innerWidth >= 970;



if(inDesktop) {
  aboutSection.style.paddingBottom = aboutList.clientHeight + 100 + 'px';
} else{
  aboutSection.style.paddingBottom = 50 + 'px';
}

console.log(aboutList.clientHeight);
console.log(aboutSection.style.paddingBottom);
// ---------------------------Popap---------------------------

const objImgs = document.querySelectorAll('.objects-item-imgs img');

objImgs.forEach(img => {
  img.addEventListener('click', () => {
    img.nextElementSibling.classList.add('active');
    img.nextElementSibling.addEventListener('click', () => {
      img.nextElementSibling.classList.remove('active');
    })
  })
})

