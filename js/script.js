// Кнопка вызова модального окна Перезвон
var buttonCall = document.querySelector('.button-call')
// Класс скрытия подложки модального окна
var popupContainerHidden = document.querySelector('.popup-container-hidden')
// Класс скрытия модального окна Перезвон
var popupCallbackHidden = document.querySelector('.popup-callback-hidden')

// Открывает окно Перезвон
if (buttonCall) {
    buttonCall.addEventListener(
        'click',
        function () {
            popupContainerHidden.classList.remove('popup-container-hidden')
            popupCallbackHidden.classList.remove('popup-callback-hidden')
        }
    )
}

// Кнопка закрытия модального окна Перезвон
var popupCallBtnClose = document.querySelector('.popup-call-btn-close')

if (popupCallBtnClose) {
    popupCallBtnClose.addEventListener(
        'click',
        function () {
            popupContainerHidden.classList.add('popup-container-hidden')
            popupCallbackHidden.classList.add('popup-callback-hidden')
        }
    )
}


// Кнопка вызова окна Калькулятор
var welcomeButton = document.querySelector('.welcome-button')
// Класс скрытия модального окна Калькулятор
var popupCalculatorHidden = document.querySelector('.popup-calculator-hidden')

if (welcomeButton) {
    welcomeButton.addEventListener(
        'click',
        function () {
            popupContainerHidden.classList.remove('popup-container-hidden')
            popupCalculatorHidden.classList.remove('popup-calculator-hidden')
        }
    )
}

// Кнопка закрытия окна Калькулятор
var popupCalcBtnClose = document.querySelector('.popup-calc-btn-close')

if (popupCalcBtnClose) {
    popupCalcBtnClose.addEventListener(
        'click',
        function () {
            popupContainerHidden.classList.add('popup-container-hidden')
            popupCalculatorHidden.classList.add('popup-calculator-hidden')
        }
    )
}

// Кнопка перехода на окно Вопросы
var calculatorButton = document.querySelector('.calculator-button')
// Класс скрытия окна Вопросы
var popupQuestionsHidden = document.querySelector('.popup-questions-hidden')

if (calculatorButton) {
    calculatorButton.addEventListener(
        'click',
        function () {
            popupCalculatorHidden.classList.add('popup-calculator-hidden')
            popupQuestionsHidden.classList.remove('popup-questions-hidden')
        }
    )
}

// Кнопка закрытия окна Вопросы
var popupQuestionsBtnClose = document.querySelector('.popup-questions-btn-close')

if (popupQuestionsBtnClose) {
    popupQuestionsBtnClose.addEventListener(
        'click',
        function () {
            popupQuestionsHidden.classList.add('popup-questions-hidden')
            popupContainerHidden.classList.add('popup-container-hidden')
        }
    )
}

// Кнопка перехода на окно завершения
var questionsLowerBtn = document.querySelector('.questions-lower-btn')
// Класс скрытия окна Спасибо
var popupThxHidden = document.querySelector('.popup-thx-hidden')

if (questionsLowerBtn) {
    questionsLowerBtn.addEventListener(
        'click',
        function () {
            popupQuestionsHidden.classList.add('popup-questions-hidden')
            popupThxHidden.classList.remove('popup-thx-hidden')
        }
    )
}

// Кнопка Ок окна Спасибо
var thxBtn = document.querySelector('.thx-btn')

// Кнопка закрытия окна Спасибо
var popupThxBtnClose = document.querySelector('.popup-thx-btn-close')

if (popupThxBtnClose) {
    popupThxBtnClose.addEventListener(
        'click',
        function () {
            popupThxHidden.classList.add('popup-thx-hidden')
            popupContainerHidden.classList.add('popup-container-hidden')
        }
    )
}

if (thxBtn) {
    thxBtn.addEventListener(
        'click',
        function () {
            popupThxHidden.classList.add('popup-thx-hidden')
            popupContainerHidden.classList.add('popup-container-hidden')
        }
    )
}