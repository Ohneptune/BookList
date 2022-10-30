//store our button into a variable
const button = document.querySelector("button");

//add event listener to a button
button.addEventListener("click", (event)=>{
    //console.log(event)
    const li = document.createElement('li');
    //creating an input element
    const input = document.querySelector('input')
    //assign the value of the input of the list item
    li.textContent = input.value;
    console.log(li);
    //append the list item to the ul
    const ul = document.querySelector('ul').appendChild(li);
    input.value = "";
});
document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(event) {
    console.log(event);
}
