let screenPlayer = document.getElementById('screenPlayer')
let screenComputer = document.getElementById('screenComputer')
let result = document.getElementById('result')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.onclick = () => {
    screenPlayer.style.backgroundImage = "url('images/pedra.jpg')"
    let randomImage = generateRandomNumber()
    screenComputer.style.backgroundImage = `url('images/${randomImage}.jpg')`
    if (randomImage === 'tesoura'){
        result.innerHTML = `<h1>GANHOU</h1>`
    } else if (randomImage === 'pedra'){
        result.innerHTML = `<h1>EMPATOU</h1>`
    } else {
        result.innerHTML = `<h1>PERDEU</h1>`
    }
}

paper.onclick = () => {
    screenPlayer.style.backgroundImage = "url('images/papel.jpg')"
    let randomImage = generateRandomNumber()
    screenComputer.style.backgroundImage = `url('images/${randomImage}.jpg')`
    if (randomImage === 'tesoura'){
        result.innerHTML = `<h1>PERDEU</h1>`
    } else if (randomImage === 'pedra'){
        result.innerHTML = `<h1>GANHOU</h1>`
    } else {
        result.innerHTML = `<h1>EMPATOU</h1>`
    }
}

scissors.onclick = () => {
    screenPlayer.style.backgroundImage = "url('images/tesoura.jpg')"
    let randomImage = generateRandomNumber()
    screenComputer.style.backgroundImage = `url('images/${randomImage}.jpg')`
    if (randomImage === 'tesoura'){
        result.innerHTML = `<h1>EMPATOU</h1>`
    } else if (randomImage === 'pedra'){
        result.innerHTML = `<h1>PERDEU</h1>`
    } else {
        result.innerHTML = `<h1>GANHOU</h1>`
    }
}

let generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*3)
    let randomImage;
    if (randomNumber === 0){
        return randomImage = 'pedra'
    } else if (randomNumber === 1){
        return randomImage = 'tesoura'
    } else if (randomNumber === 2){
        return randomImage = 'papel'
    }
}


