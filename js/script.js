var buttonElement = document.querySelector('.welcome-button')
var popupContainer = document.querySelector('.popup-container-hidden')
var popupCalculatorButtonClose = document.querySelector('.popup-calculator-button-close')

buttonElement.addEventListener(
    'click',
    function () {
        // buttonElement.classList.toggle('button-red')
        if (buttonElement.classList.contains('button-red')) {
            buttonElement.classList.remove('button-red')
        } else {
            buttonElement.classList.add('button-red')
        }
    }
)

buttonElement.addEventListener(
    'click',
    function () {
        popupContainer.classList.remove('popup-container-hidden')
    }
)