function playGame(){
    let choices = ["Rock", "Paper", "Scissor"],
        userScore = 0,
        computerScore = 0,
        gamesPlayed = 0,
        matchWinner;

    while (gamesPlayed< 5){
        let matchWinner = playMatch(choices);  // will add + 1 to winner

        switch (matchWinner){
            case 'user':
                userScore++;
                break;
            case 'computer':
                computerScore++;
                break;
        }

        gamesPlayed++;
    }

    // output winner
    if (userScore > computerScore){
        alert(`user(${userScore}) wins`)
    } else {
        alert (`computer(${computerScore}) wins`)
    }
}


function computerChoice(choices){
    let index = Math.floor(Math.random()*3),
        choice = choices[index];
    
    return choice;
}

function userChoice(choices){
    let choice,
        indexChoice;

    indexChoice = +(prompt(`Choose the index of your choice
                            [0:Rock, 1:Paper, 2:Scissor]`));
    
    if (typeof(indexChoice)!='number'){
        userChoice(choices);
    } else {
        choice = choices[indexChoice];
        return choice;
    }
}

function evaluateChoice(userChoice, computerChoice)
    {
    let r = "Rock",
        p = "Paper",
        s = "Scissor",
        uC = userChoice,
        cC = computerChoice;

        choiceIs = (choice, type) => (choice == type);

        // cases: the ff cases must be satisfied in order 
        let case1 = (uC == p) & (cC == r),
            case2 = (uC == r) & (cC == s),
            case3 = (uC == s) & (cC == p);

        if (case1 || case2 || case3){
            return 'user'
        }else{
            return 'computer'
        }
    
}

function playMatch(choices){
    let uC = userChoice(choices),       // abbreviate computer choice and user choice
        cC = computerChoice(choices),
        matchWinner;

    if(uC == cC){
        playMatch(choices)  //replay match
    }

    matchWinner = evaluateChoice(uC, cC); 
    return matchWinner;
}

playGame();