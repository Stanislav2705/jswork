// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const downClick = document.querySelector('[data-action="decrement"]');
const upClick = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')
let counterValue = 0




downClick.addEventListener("click", () => {
    value.textContent = counterValue -= 1
})

upClick.addEventListener("click", () => {
    value.textContent = counterValue += 1
})