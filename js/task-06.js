// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.

const textInput = document.querySelector('#validation-input')

textInput.addEventListener('blur', (event) => {
    if (event.target.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add('valid')
        return 
    }
    textInput.classList.add('invalid')
})

