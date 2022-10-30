class Hamster {
    constructor(name){
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return.this.price
    }
}

/* methods
getName() returns name
getAge() returns age
getWeight() returns weight
greet() logs a message with persons name
eat() increment weight, increment mood
excercise() decrement weight
ageUp() increment age,height,weight
buyHamster(hamster) push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.Name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return.this.weight
    }
    greet(){
        console.log(`I am ${this.name}`)
    }
    eat()(
        this.weight++
        this.mood++
    )
    excercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamster.push(hamster)
        this.mood+=10
        this.bankAccount-=hamster.getPrice()
    }
}


const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp()
}
for(let i =0; i < 5; i++){
  timmy.eat()
}
for(let i =0; i < 5; i++){
  timmy.exercise()
}
for(let i =0; i < 9; i++){
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(let i =0; i < 15; i++){
  timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()



class Dinner {

}

class Chef {

}