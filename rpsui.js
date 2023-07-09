//     function getPlayerChoice() {
//     return prompt ()
// }
//     getPlayerChoice()

//     function getComputerChoice(){
//     if (Math.floor(Math.random()*3) == 0) {
//         return("sisscors")}
//     else if (Math.floor(Math.random()*3) == 1) {
//         return "paper"}
//     else if (Math.floor(Math.random()*3) == 2) {
//         return "rock"}
// }
//     console.log(`CPU picked ${getComputerChoice()}`)

var playerSelection

//used var instead of let or const


    var rck = document.querySelector('#rck')
    rck.addEventListener('click', () => {
        playerSelection = "rock"
    })
    var pper = document.querySelector('#pper')
    pper.addEventListener('click', () => {
        playerSelection = "paper"
    })
    var sissors = document.querySelector('#sissors')
    sissors.addEventListener('click', () => {
        playerSelection = "scissors"
    })


console.log(playerSelection)

playerSelectionAndStart = () => {
    
    GAMELOGIC()
}



//store player choice in variable
var referee = document.querySelector('#referee')
var scorediv = document.querySelector('#results')
var playerscorediv = document.querySelector('#playerscorediv')
var cpuscorediv = document.querySelector('#cpuscorediv')
var newRound = document.querySelector('#sart')
var announcer = document.querySelector('#announcer')
var whowon = document.querySelector('#whowon')



let playerScore = 0
let CPUscore = 0
var playerScorecounter = `playerscore ${playerScore}`
let CPUscorecounter = `CPUscore ${CPUscore}`
// console.log(playerScorecounter)
// console.log(CPUscorecounter)
// console.log(`words ${playerScore += 1}`)


// game = function(CPUscore, playerScore) {

//     // probably the fix for score issue
//     playerScore = 0
//     CPUscore = 0
//     //
// }


    GAMELOGIC = function(computerSelection) {

    referee.textContent = ''
    
//variables and scores
    var playerScorecount = document.querySelector('#playerscorediv')
    console.log(playerScorecounter)
    console.log(CPUscorecounter)


//CPU choices
    function getComputerChoice(){
            if (Math.floor(Math.random()*3) == 0) {
                    return("scissors")}
                else if (Math.floor(Math.random()*3) == 1) {
                    return "paper"}
                else if (Math.floor(Math.random()*3) == 2) {
                    return "rock"}
                    else return "rock"
            }
    let computerChoice = getComputerChoice()
        


    // playerchoice
        // playerSelection = prompt()
        announcer.textContent = `Player picked ${playerSelection.toLowerCase()}  ||  CPU picked ${computerChoice}`
        console.log(`Player picked ${playerSelection.toLowerCase()}`)
        console.log(`CPU picked ${computerChoice}`)
    

    //referee
    if (playerSelection == "rock" && computerChoice == "paper"
    || playerSelection == "paper" && computerChoice == "scissors"
    || playerSelection == "scissors" && computerChoice == "rock") {whowon.textContent =(`CPU SCORES ${CPUscore += 1}`);}
  
    else if (computerChoice == "rock" && playerSelection == "paper"
    || computerChoice == "paper" && playerSelection == "scissors"
    || computerChoice == "scissors" && playerSelection == "rock") {whowon.textContent =(`PLAYER SCORES ${playerScore += 1}`);}

    else if (playerSelection === computerSelection) {console.log(`draw ${CPUscore += 0}`);}
    else {console.log("draw")}

    console.log(`PLAYER score:${playerScore}`)
    console.log(`CPU score:${CPUscore}`)
    

    console.log('----------NEW ROUND----------')


    

    scorediv.textContent = 'RESULTS:'
    playerscorediv.textContent = `Player Score: ${playerScore}`
    cpuscorediv.textContent = `CPU Score: ${CPUscore}`



    scoreReset = () => {
    playerScore = 0
    CPUscore = 0
    }

    if (CPUscore == 5) {
        referee.textContent = 'CPU WINS, RESETTING SCORES'
        // console.log('CPU WINS')
        // console.log('----------NEW GAME----------')
        scoreReset()
    }

    if (playerScore == 5) {
        referee.textContent = 'PLAYER WINS, RESETTING SCORES'
        // console.log('PLAYER WINS')
        // console.log('----------NEW GAME----------')
        scoreReset()
    }

}
        







// create variable that displays  score and string use it as the counter
// in if else statement

newRound.addEventListener("click", () => {GAMELOGIC()})