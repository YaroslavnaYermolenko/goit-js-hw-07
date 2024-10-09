const list = document.querySelector("#categories");
const listChildren = Array.from(list.children);
console.log(`Numbers of categories: ${list.children.length}`);
listChildren.forEach(element => {
    if(element.className == 'item' && element.hasChildNodes('h2')){
        console.log(`Category: ${element.querySelector('h2').textContent}`);
        console.log(`Elements: ${element.querySelector('ul').children.length}`);
    }
});