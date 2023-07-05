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

    
let playerScore = 0
let CPUscore = 0
let playerScorecount = `playerscore ${playerScore}`
let CPUscorecount = `CPUscore ${CPUscore}`
// console.log(playerScorecount)
// console.log(CPUscorecount)
// console.log(`words ${playerScore += 1}`)


game = function(CPUscore, playerScore) {

    // function getPlayerChoice() {
    //     let playerthrow = prompt()
    //     return playerthrow
    // }
    // console.log(`player picked ${getPlayerChoice()}`)

    

        // console.log(`CPU picked ${getComputerChoice()}`)



    playerScore = 0
    CPUscore = 0
 
    GAMELOGIC = function(playerSelection, computerSelection) {
        //variables and scores
        let playerScorecount = `playerscore ${playerScore}`
        let CPUscorecount = `CPUscore ${CPUscore}`
        console.log(playerScorecount)
        console.log(CPUscorecount)


        //CPU choices
    function getComputerChoice(){
            if (Math.floor(Math.random()*3) == 0) {
                    return("scissors")}
                else if (Math.floor(Math.random()*3) == 1) {
                    return "paper"}
                else if (Math.floor(Math.random()*3) == 2) {
                    return "rock"}
            let undefined = "rock"
            }
    let computerChoice = getComputerChoice()
        


    // playerchoice
        // playerSelection =  playerSelection
        playerSelection = prompt()
        console.log(`player picked ${playerSelection.toLowerCase()}`)
        console.log(`CPU picked ${computerChoice}`)
    

    //referee
    if (playerSelection == "rock" && computerChoice == "paper"
    || playerSelection == "paper" && computerChoice == "scissors"
    || playerSelection == "scissors" && computerChoice == "rock") {console.log(`CPU SCORES ${CPUscore += 1}`);}
  
    else if (computerChoice == "rock" && playerSelection == "paper"
    || computerChoice == "paper" && playerSelection == "scissors"
    || computerChoice == "scissors" && playerSelection == "rock") {console.log(`PLAYER SCORES ${playerScore += 1}`);}

    else if (playerSelection === computerSelection) {console.log(`draw ${CPUscore += 0}`);}
    else {console.log("draw")}

        console.log(`PLAYER score:${playerScore}`)
        console.log(`CPU score:${CPUscore}`)
    

    console.log('----------NEW ROUND----------')


    

    

}
GAMELOGIC()
GAMELOGIC()
GAMELOGIC()
GAMELOGIC()
GAMELOGIC()
// console.log(playerScorecount)
// console.log(CPUscorecount)
}


// create variable that displays  score and string use it as the counter
// in if else statement

game()

// console.log(GAMELOGIC())
// (getComputerChoice())


// let playerSelection = function() {
//     prompt ()
// }


