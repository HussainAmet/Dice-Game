document.querySelector("button").addEventListener("click", rolling);
document.querySelector(".b2").addEventListener("click", rolling);
function rolling() {
    var randomNoDice1 = Math.floor((Math.random() * 6) + 1);
    var nameDice1 = "Dice" + randomNoDice1 + ".svg";
    var pathDice1 = "./images/" + nameDice1;
    document.querySelectorAll("img")[0].setAttribute("src", pathDice1);

    var randomNoDice2 = Math.floor((Math.random() * 6) + 1);
    var nameDice2 = "Dice" + randomNoDice2 + ".svg";
    var pathDice2 = "./images/" + nameDice2;
    document.querySelectorAll("img")[1].setAttribute("src", pathDice2);

    if(randomNoDice1 > randomNoDice2){
        document.querySelector("h1").innerHTML="Player 1 Winner";
    }
    else if(randomNoDice2 > randomNoDice1){
        document.querySelector("h1").innerHTML="Player 2 Winner";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
}