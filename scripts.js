const result = document.querySelector('.result')
const personalPoint = document.getElementById('human-point')
const machinePoint = document.getElementById('machine-point')
const playMachineResult = document.querySelector('.play-machine-result')

let personalScore = 0
let machineScore = 0

const playHuman = (humanChoice) => {

    playerGame(humanChoice, playMachine())

}

const playMachine = () => {

    const options = ["rock", "paper", "scissors"]

    let numberRandon = Math.floor(Math.random() * 3)

    if(numberRandon === 0){

        playMachineResult.innerHTML = '&#x1F44A'

    } else if(numberRandon === 1){

        playMachineResult.innerHTML = '&#x1F91A'

    } else{

        playMachineResult.innerHTML = '&#x270C'

    }

    return options[numberRandon]

}

const playerGame = (human, machine) => {


    if (human === machine) {

        result.innerHTML = 'empatou'

    } else if ((human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {

        result.innerHTML = 'ganhou'
        personalScore = personalScore + 1
        personalPoint.innerHTML = `${personalScore}`


    } else {

        result.innerHTML = 'perdeu'
        machineScore = machineScore + 1
        machinePoint.innerHTML = `${machineScore}`
    }

}


const resetButton = () => {

    result.innerHTML = ''
    personalPoint.innerHTML = 0
    machinePoint.innerHTML = 0
    // console.log('está funcionando o botão de resetar')

}