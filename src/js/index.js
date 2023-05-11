import Swiper, {
    Pagination
} from 'swiper';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';


Swiper.use([Pagination]);


let swiper;
let swiper2;
let swiper3;

// Условие для viewport шириной менее 768 пикселей
const mediaQuery = window.matchMedia('(max-width: 768px)');
function swiperCreator(e) {
    // Проверить, что media query будет true
    if (e.matches) {
        swiper = new Swiper(".swiper-brands", {
            direction: "horizontal",
            slidesPerView: 1.4,
            // centeredSlides: true,
            spaceBetween: 16,
            slideToClickedSlide: true,
            loop: true,
            simulateTouch: true,


            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
        });

        swiper2 = new Swiper(".swiper-tech", {
            direction: "horizontal",
            slidesPerView: 1.4,
            spaceBetween: 16,
            slideToClickedSlide: true,
            // simulateTouch: true,
            slideClass: 'swiper-tech-slide',
            touchEventsTarget: 'container',


            pagination: {
                el: ".swiper-pagination2",
                clickable: true,
            },
        });

        swiper3 = new Swiper(".swiper-prices", {
            direction: "horizontal",
            slidesPerView: 1.2,
            // centeredSlides: true,
            spaceBetween: 16,
            slideToClickedSlide: true,
            slideClass: 'swiper-price-slide',

            pagination: {
                el: ".swiper-pagination3",
                clickable: true,

            },
        });


    } else if (swiper) {
        swiper.destroy();
        swiper2.destroy();
        swiper3.destroy();

    }
}


mediaQuery.addEventListener('change', swiperCreator)
// Начальная проверка
swiperCreator(mediaQuery);


let heightBrandsContainer = document.querySelector('.swiper1');
let brandsSliderShowMoreBtn = document.querySelector(".repair-brands__show-more-btn");

brandsSliderShowMoreBtn.addEventListener("click", (event) => {
    heightBrandsContainer.classList.toggle('height'); // макс хейт с фикс на авто меню
    brandsSliderShowMoreBtn.classList.toggle('coll'); // доп класс кнопки показать всё

    brandsSliderShowMoreBtn.scrollIntoView({  // вроде как рабочая фишка подтянуть экран за элеменотм
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

let techSliderShowMoreBtn = document.querySelector(".repair-tech__show-more-btn");
let heightTechContainer = document.querySelector('.swiper2');
techSliderShowMoreBtn.addEventListener("click", (event) => {
    heightTechContainer.classList.toggle('height'); // макс хейт с фикс на авто меню
    techSliderShowMoreBtn.classList.toggle('coll'); // доп класс кнопки показать всё

    techSliderShowMoreBtn.scrollIntoView({  // вроде как рабочая фишка подтянуть экран за элеменотм
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

let headerMenuBtn = document.querySelector('.header__burger');
let asideMenuBtn = document.querySelector('.burger-menu__burger-btn');

let menuContainer = document.querySelector('.burger-menu');
let body = document.querySelector('body');

const toggleMenu = function () {
    menuContainer.classList.toggle('active');
    body.classList.toggle('blur');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}
headerMenuBtn.addEventListener('click', toggleMenu)

asideMenuBtn.addEventListener('click', toggleMenu)

// замутил кнопу читать далее для контента
let btnContent = document.querySelector('.content__show-more-btn');
let textExpand = document.querySelector('.content__text-expand');
let hiddenText = document.querySelector('.hidden-text');
btnContent.addEventListener('click', function (){
    textExpand.classList.toggle('content__text-expand');
    textExpand.classList.toggle('content__text');
    hiddenText.classList.toggle('hidden-text');
    btnContent.classList.toggle('full');

})
// -------------


// закрываем бургер по ескейп
document.addEventListener('keydown', function(e) {
    if( e.key === "Escape" ){
        if (menuContainer.classList.contains("active")) {
            toggleMenu();
        }
        else if (isModalOpen) {
            document.body.style.overflow = document.body.style.overflow = 'auto';
            modal.close();
        }

    }
});



document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target === menuContainer;
    const menu_is_active = menuContainer.classList.contains("active");

    if (its_menu && menu_is_active) {
        toggleMenu();
    }
});


// модалки пошли)

const modal = document.querySelector('.modal-request')
const modalBox = document.querySelector('.modal-request__wrapper')

const showModalBtnHeader = document.querySelector('.actions-message') //  кнопка 1й модалки
// const showModalBtnTitle = document.querySelector('.title__modal-request')   //  кнопка 1й модалки в заголовке
const closeModalBtn = document.getElementById('modal-request__close-btn')  // кнопка закрытия модалки в модалке
let isModalOpen = false



showModalBtnHeader.addEventListener('click', (e) => {
    const menu_is_active = menuContainer.classList.contains("active");
    modal.showModal()
    if (!menu_is_active) {
        document.body.style.overflow = document.body.style.overflow = 'hidden';
        isModalOpen = true
        e.stopPropagation()
    }
    else if (menu_is_active) {
        isModalOpen = true
        e.stopPropagation()
    }

})


closeModalBtn.addEventListener('click', () => {
    const menu_is_active = menuContainer.classList.contains("active");
    modal.close()
    if (!menu_is_active) {
        document.body.style.overflow = document.body.style.overflow = 'auto';
        isModalOpen = false
    }
    else if (menu_is_active) {
        isModalOpen = false
    }

})

document.addEventListener('click', (e) => {
    const menu_is_active = menuContainer.classList.contains("active");
    if (isModalOpen && !modalBox.contains(e.target)) {
        if (!menu_is_active) {
            document.body.style.overflow = document.body.style.overflow = 'auto';
            modal.close();
            isModalOpen = false;
        }
        else if (menu_is_active) {
            modal.close();
            isModalOpen = false;
        }
    }

})






//---------- модалка звонок --------
const modalCall = document.querySelector('.modal-call')
const modalCallBox = document.querySelector('.modal-call__wrapper')

const showModalBtnBurger = document.querySelector('.modal-box-call') //  кнопка звонка в бургере
const closeModalBtnBurger = document.getElementById('modal-call__close-btn')  // кнопка закрытия модалки в модалке
let isModalCallOpen = false

showModalBtnBurger.addEventListener('click', (e) => {
    const menu_is_active = menuContainer.classList.contains("active");
    modalCall.showModal();
    if (!menu_is_active) {
        document.body.style.overflow = document.body.style.overflow = 'hidden';
        isModalCallOpen = true
        e.stopPropagation()
    }
    else if (menu_is_active) {
        isModalCallOpen = true
        e.stopPropagation()
    }
})

closeModalBtnBurger.addEventListener('click', () => {
    const menu_is_active = menuContainer.classList.contains("active");
    modalCall.close()
    if (!menu_is_active) {
        document.body.style.overflow = document.body.style.overflow = 'auto';
        isModalCallOpen = false
    }
    else if (menu_is_active) {
        isModalCallOpen = false
    }

})


document.addEventListener('click', (e) => {
    const menu_is_active = menuContainer.classList.contains("active");
    if (isModalCallOpen && !modalCallBox.contains(e.target)) {
        if (!menu_is_active) {
            document.body.style.overflow = document.body.style.overflow = 'auto';
            modalCall.close();
            isModalCallOpen = false;
        }
        else if (menu_is_active) {
            modalCall.close();
            isModalCallOpen = false;
        }
    }
})
