
const elements = document.querySelectorAll('.item')
elements.forEach(function(element){
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)    
});








  

