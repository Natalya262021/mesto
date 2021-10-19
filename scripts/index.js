// Находим форму в DOM
let formElement = document.querySelector('.form__popup');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.form__input-name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.form__input-about');// Воспользуйтесь инструментом .querySelector()
 // Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');// Получите значение полей jobInput и nameInput из свойства value
    let h1 = document.querySelector('.profile__title');
    let p = document.querySelector('.profile__subtitle');// Выберите элементы, куда должны быть вставлены значения полей
    
    h1.textContent = nameInput.value;
    p.textContent = jobInput.value;// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

const modalWindow = document.querySelector('.popup');
const modalWindowClose = modalWindow.querySelector('.popup__close');
const btnEdit = document.querySelector('.button__edit');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_opened');
}

btnEdit.addEventListener('click', toggleModalWindow);
modalWindowClose.addEventListener('click', toggleModalWindow);