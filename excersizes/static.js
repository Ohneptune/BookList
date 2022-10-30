class pig{

    constructor (name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        }
    eat(){
        console.log["eat slop"]
    }
    squeal(){
        console.log["squeal like a pig"]
    }   
    }

Class GuineaPig extends pig{
    hasLongHair(){
        console.log ("I have long hair")
    }
    hasNappyHair(){
        console.log ("I have naps")
    }
}

Class GizzyPig extends pig{
    hasOneEye(){
        console.log ("I have one eye")
    }
    hasBigGut(){
        console.log ("Im a fatty")
    }
}
pig.eat("Gizzpig");
