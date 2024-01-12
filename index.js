var randomnumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber1);
var randomimage1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);  
 //this code is of 1st image


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber2);
var randomimage2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2); 
  //this code is of 2nd image



if(randomnumber1 > randomnumber2){
    document.querySelector("h2").innerHTML="😍 Player 1 wins!"
} else if (randomnumber2 > randomnumber1){
    document.querySelector("h2").innerHTML="Player 2 wins! 🤩"
} else {
    document.querySelector("h2").innerHTML="draw!! 🤐"
}