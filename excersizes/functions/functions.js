console.log("functions leeson");

//function declaration
function one () {
        return 'one';
}

one(); //calling a function

//function expression
const two = () =>{
        return 2;
}

const shortenedTwo = () => 2;

//

const willSpina = {
        name: "Will",
        occupation: "Ugly",
        overThrity: true,
        age: 98
}
const increaseAge = (person) => {
    //dot notation
    person.age += 1;
    console.log(`Hooray its your ${per.age} brithday`)
}

//call the function
increaseAge(willSpina);