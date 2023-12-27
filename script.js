let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComp = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

}

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "Yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genComp();
    console.log("Comp choice =", compChoice);

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
             // scissor, paper
             userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    })
})