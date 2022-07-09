const category = document.querySelector('h2')
const navEl = document.querySelector('.item')
const lastElement = navEl.lastElementChild

console.log(`Category: ${category.textContent}`)
console.log(`Elements: ${lastElement.children.length}`)