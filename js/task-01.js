// const category = document.querySelector('h2')
const categoryElement = document.querySelectorAll('ul')

const numCategories = (categories) => console.log(`Number of categories: ${categories.length - 1}`)

numCategories(categoryElement)
// const lastElement = navEl.lastElementChild

// console.log(`Category: ${category.textContent}`)
// console.log(`Elements: ${lastElement.children.length}`)

const itemsElement = document.querySelectorAll('.item')

const categoryEl = (elements) => {
    return elements.forEach(element => 
        console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`));
}

categoryEl(itemsElement)