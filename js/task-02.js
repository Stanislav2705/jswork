const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsList = document.querySelector('#ingredients');

const ingredientsListElement = ingredients.map((ingredient) => {
  const action = document.createElement('li')
  action.textContent = ingredient
  action.classList.add('item')
  return action
})

ingredientsList.append(...ingredientsListElement)