// var buttonElement = document.querySelector('.welcome-button')
// var popupContainer = document.querySelector('.popup-container-hidden')
// var popupCalculatorButtonClose = document.querySelector('.popup-calculator-button-close')

// buttonElement.addEventListener(
//     'click',
//     function () {
//         // buttonElement.classList.toggle('button-red')
//         if (buttonElement.classList.contains('button-red')) {
//             buttonElement.classList.remove('button-red')
//         } else {
//             buttonElement.classList.add('button-red')
//         }
//     }
// )

// buttonElement.addEventListener(
//     'click',
//     function () {
//         popupContainer.classList.remove('popup-container-hidden')
//     }
// )

var buttonCall = document.querySelector('.button-call')
var popupContainerHidden = document.querySelector('.popup-container-hidden')

buttonCall.addEventListener(
    'click',
    function () {
        popupContainerHidden.classList.remove('popup-container-hidden')
    }
)

var popupBtnClose = document.querySelector('.popup-btn-close')

popupBtnClose.addEventListener(
    'click',
    function () {
        popupContainerHidden.classList.add('popup-container-hidden')
    }
)

var slider = document.querySelector('.projects-slider-list')
var slides = document.querySelectorAll('.projects-slider-item')
var projectsSliderBtnLeft = document.querySelector('.projects-slider-btn-left')
var projectsSliderBtnRight = document.querySelector('.projects-slider-btn-right')
