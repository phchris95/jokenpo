const result = document.querySelector('.result')
const personalPoint = document.getElementById('human-point')
const machinePoint = document.getElementById('machine-point')
const playMachineResult = document.querySelector('.play-machine-result')

let personalScore = 0
let machineScore = 0

/* 
    ENUM -> Criamos essa variaável para unificar as variaveis que usamos em nosso código, pois assim quando tivermos que 
    fazermos alguma modificação, mudamos em apenas um só lugar

    machineScore  -> Padrão Camel Case
    GAME_OPTIONS  -> Padrão Snake Case
*/
const GAME_OPTIONS = {

    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'

}
const playHuman = (humanChoice) => {

    playerGame(humanChoice, playMachine())

}

const playMachine = () => {

    const options = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

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

    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {

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