// 1. We assign a value to a variable using the symbol =
// 2. To change  the value of a variable (which has var) right click on the command to change the variable. dont use let
// 3. You assign the value of that variable to another variable using the assignment operator.
// 4. Declare specificies the variable, assign allows you to assign it to a new string. define gives properties
// 5. Written out statements that define language. simplified programming language.
// 6. Percentage of time should be spennt solving a problem depends on the difficulty. trivial should be a small time. an hour?? lol



//STRINGS
let firstVariable = "Hellow World"
firstVariable = 9
let secondVariable = firstVariable
secondVariable = "Hi again"
// the value of the firstVariable is 9
yourName = "Will"
console.log ("Hellow, my name is ${yourName}')

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = Kevin;

console.log (a < b);
console.log (c > d);
console.log ('Name' ==='Name');

// FOR THE NEXT TWO ONLY USE && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(e == 'Kevin');
console.log(a < b + c); // note a < b < c is NOT CORRECT (and is not a valid JS expression)
console.log(a * a + d); // note the answer is a simple arthimitic equation not something weird
 console.log (48 =='48');

// the Farm
animal = "cow";
if(animal === "cow"{
    console.log("moo");
} else {
    console.log ("Hey! youre not a cow.")
}


// Driver's Ed
let age;
if (age >= 16){
    console.log("here are they keys!")
} else {
    console.log("Sorry, youre too young");
}

//LOOPS
for (let i= 0; i <=10; i++){
    console.log(i)
}
// next question
for (let i= 10; i<=400; i++){
    console.log(i)
}
// next question
for (let i=12; i < 4000; i= i+3){
    console.log(i)
}
// next question
for (let i = 1; i <=100; i++){
    if (i % 2 == 0)
    console.log(i)
}


//The Basics

for (let i =0; i<11; i++){
    console.log(i)}

//Get Even

for (let i = 0; i <= 100; i++){
    if (i % 5 == 0){
        console.log(`I am a ${i}. High Five!`);
    };
}
//

for (let i=0; i <= 100;, i++
    if (i% 5 == 0){
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`)
    } else if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} has both a three and a five`)
    }

// Savings Account

let bank_account =0

for (i=1; i<11; i++){
    bank_account= bank_account + 1
}
    console.log(bank_account)
//

let bank_account2 =0

    console.log(bank_account2 * 2)
for (i=1; i<=100; i++){
    bank_account2= bank_account2 +1
}



//ARRAY & CONTROL FLOW
//What are the things in an array called? 
//an element

//Do Arrays gaurantee those things will be in order?
//no

//What real life thing could you model with an array?
// contacts in phone. myspace top 8

//Create an array that contains three quotes and store it in a variable callled quotes
let quotes = '"shes big" "shes huge" "shes a monster"'

//const randomThings = [1, 10, "Hello", true]
        
//How do you access the 1st element in the array?
// the index number which usually starts off at 0 then 1 [] square brakets

//Change the value of "hello " to "World"
//randomThing = [1, 10, "Hello", true]
//if("Hello" == "World"{
//    console.log('World')

//Check the value of the array to make sure it updated the array.
//How? Why! yes! consol.log()

//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
// brackets to access an eleemnt
//Change the value of "Github" to "Octocat"
//const ourClass= [push.Github, pull.Octocat]
//Add a new element, "Cloud City" to the array
//const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    //push(Cloud City)

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]

myArray.push('Aegon');
myArray.shift ();
myArray.unshift("Bob Marley")
myArray.pop ();

console.log(myArray)

myArray.reverse(); //??????

console.log(myArray)




//G. Monkey in the Middle
//Write an if ... else if ... elsestatement:





//H. What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

//const kristynsCloset = [
  //"left shoe",
  //"cowboy boots",
  //"right sock",
  //"GA hoodie",
  //"green pants",
  //"yellow knit hat",
  //"marshmallow peeps"
//];

// Thom's closet is more complicated. Check out this nested data structure!!
//const thomsCloset = [
  //[
    // These are Thom's shirts
    //"grey button-up",
    //"dark grey button-up",
    //"light blue button-up",
    //"blue button-up",
  //],[
    // These are Thom's pants
    //"grey jeans",
    //"jeans",
    //"PJs"
 // ],[
    // Thom's accessories
   // "wool mittens",
    //"wool scarf",
    //"raybans"
 // ]
//];
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
const kristynsCloset = [
    "left shoe"
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ]
  const kryistyn = ["Kristyn is rocking that" + const krystynsCloset( "cowboy boots" + "today")];
    console.log(constKristynsCloset)

const kristynsCloset.push("raybans")
  console.log (kristynsCloset)
const kristynsCLoset.slice("yellow hat")
const kristynsCloset.pull("stained knit hat")


//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]} today!`)


// FUNCTIONS //
///////////////////////////A

function printCool(name){
    console.log(`${name} is cool`)
}
///////////////////////////////B
function calculateCube(num){
    console.log(num ** 3);
}
calculateCube(5);
//output = 125
/////////////////////////////// this one was so hard, i could not get this to run
function is_Vowel(x){
    if(x =="A"|| x == "E"|| x == "I" || x == "O" || x == "U"){
        result = true;
    }
    else{
        result = false;
    }
return result
}
////////////////////////////////// E
function getTwoLength2 (string1, string2){
    let array1= []
    array1.push(string1.length)
    array1.push(string2.length)
    console.log(array1)
    return array1
}
getTwoLength2("123", "1234"
//////////////////////////////////////// F
function getMultipleLengths(arr){
let resultArray=[];
    arr.forEach(function(str){
        resultArray.push( str.length);
});
console.log(resultArray);
return resultArray;
}
//////////////////////////////////////// G
function maxOfThree(a,b,c){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    return max;
 
}

////////////////////////////////////// H
function printLongestWord(strs) {
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest;
    }




//////////////////////////////////
///////////OBJECTS////////////////
const user = {
    name:'Will',
    email:'rayne_moose@yahoo.com',
    age: 99,
    purchased: []
};

///////////////////////////////////B
const newArr = arr.map(object =>){
    if (object.user === email){
        return {...object, email: 'ohcasini@gmail.com'};
    }
    return object;
});

console.log(newArr);



/////////////////////////////////////////C
const user = {
    name:'Will',
    email:'rayne_moose@yahoo.com',
    age: 99,
    purchased: []
};
object.assign(obj, {location: "Delaware"});

console.log(newArr);

/////////////////////////////////////////D
const user = {
    name:'Will',
    email:'rayne_moose@yahoo.com',
    age: 99,
    purchased: []
};
purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(animals);

////////////////////////////////////////E
user.friend = {
    name: "Nancy",
    age: 100,
    location: "hell",
    purhased: []
}
console.log(user.friend "Nancy");
console.log(user.friend "hell");
/////////////
purchsed.push("The One Ring");
    console.log(purchsed);
/////////////
purchase.push("A latte");
    console.log(purchased);
   
//////////////////////////////////////F ???? i was really stuck on this what am i missing??
purchased.forEach((user)=>{
    console.log(user);
});
purchased.forEach((user.friend)=>{
    console.log(user.friend)
})
///////////////////////////////////// G