let titleDocument = document.getElementById("title");
//console.log(titleDocument)
//let paragraph = document.querySelector("cool")
//console.log(paragraph)
//paragraph.textContent += 'Hello World';
//console.log(paragraph.textContent)
//paragraph.innerHTML += `<a href = "google"> Google </a>`
//console.log(paragraph.innerHTML)

//const matches = document.querySelectorAll("div.note, div.alert");

//let comments = document.querySelectorAll(".comment");
//console.log(comment);

/*getElemenstById
querySelector
querySelectorAll: returns an array like object called *NodeList*

///////////////
QUERYSELECTORALL SYNTAX
//////////////

//for... of 
for (const comment of comments) {
  console.log(comment);
}

//for..each
comments.forEach(function (comment) {
  console.log(comment);
});

//for..each arrow function
comments.forEach((comment)=>{console.log(comment)})

let comments = {
    var text = document.querySelector('p');
    text.style.fontSize = '60px';
    ??????????????????????????
}
*/
let comments = documents.querySelectorAll(".comment");

for(const comment of comments){
    console.log(comment)
}