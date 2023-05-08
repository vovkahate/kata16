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
function resolutionWatcher(e) {
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


mediaQuery.addEventListener('change', resolutionWatcher)
// Начальная проверка
resolutionWatcher(mediaQuery);


let heightSlidesContainer = document.querySelector('.swiper1');
let button = document.querySelector(".btn-brands");

button.addEventListener("click", (event) => {
    heightSlidesContainer.classList.toggle('height'); // макс хейт с фикс на авто меню
    button.classList.toggle('coll'); // доп класс кнопки показать всё

    button.scrollIntoView({  // вроде как рабочая фишка подтянуть экран за элеменотм
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

let buttonTech = document.querySelector(".btn-tech");
let heightBrandContainer = document.querySelector('.swiper2');
buttonTech.addEventListener("click", (event) => {
    heightBrandContainer.classList.toggle('height'); // макс хейт с фикс на авто меню
    buttonTech.classList.toggle('coll'); // доп класс кнопки показать всё

    buttonTech.scrollIntoView({  // вроде как рабочая фишка подтянуть экран за элеменотм
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

let btnHeader = document.querySelector('.header__burger');
let btnMenu = document.querySelector('.burger-menu__burger-btn');

let menuContainer = document.querySelector('.burger-menu');
let body = document.querySelector('body');

const toggleMenu = function () {
    menuContainer.classList.toggle('active');
    body.classList.toggle('blur');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}
btnHeader.addEventListener('click', toggleMenu)

btnMenu.addEventListener('click', toggleMenu)

// замутил кнопу читать далее
let btnContent = document.querySelector('.btn-content');
let textExpand = document.querySelector('.content__text-expand');
let hiddenText = document.querySelector('.hidden-text');
btnContent.addEventListener('click', function (){
    textExpand.classList.toggle('content__text-expand');
    textExpand.classList.toggle('content__text');
    hiddenText.classList.toggle('hidden-text');
    btnContent.classList.toggle('full');

})
// -------------



document.addEventListener('keydown', function(e) {
    if( e.key === "Escape" ){ // код клавиши Escape, но можно использовать e.key
        // toggleMenu();
        toggleMenu();
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

