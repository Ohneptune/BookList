

var letterGrade;
var testScore;

if(testScore>= 90){
    letterGrade = "A"
}else if(testScore >= 80){
    letterGrade = "B"
}else if(testScore >= 70){

    letterGrade = "C"
}else if(testScore >= 60){
    letterGrade = "D"
}else if(testScore <= 55){
    letterGrade = "F"
}

console.log("Your letter grade is:" + letterGrade);
