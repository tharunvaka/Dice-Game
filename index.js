let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = "./dice" + randomNumber1 + ".png"


let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage)



let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomDiceImage2 = "./dice" + randomNumber2 + ".png"


let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "The Player 1 Wins!!!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "The Player 2 Wins!!!"
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw, Refresh Again!!!"
}