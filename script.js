
var num1 = Math.random();
num1 = (num1 * 6) + 1;
num1 = Math.floor(num1);



var imagenum1 = "images/dice" + num1 + ".png";         //"images/dice1.png"

document.querySelectorAll("img")[0].setAttribute("src", imagenum1);


var num2 = Math.random();
num2 = (num2 * 6) + 1;
num2 = Math.floor(num2);

var imagenum2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imagenum2);

if ( num1> num2){
    document.querySelector("h1").innerHTML= " Player 1 wins";


}
else if (num1<num2){
document.querySelector("h1").innerHTML= " Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= " Draw";

}
