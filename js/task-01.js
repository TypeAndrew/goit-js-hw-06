
const categories = [...document.querySelector('#categories').children];
//console.log(categories);
console.log("Number of categories: " + categories.length);

categories.forEach((element) => {
     console.log("Category: "+element.childNodes[1].innerHTML);
     console.log("Elements: "+element.children[1].children.length);
})
 
/*for (const iterator of categories) {
     console.log("Category: "+iterator.childNodes[1].innerHTML);
     console.log("Elements: "+iterator.children[1].children.length);
    
    /*for (const item of iterator.children[1].children) {
         console.log(item.outerText);
        
    }    
}*/





