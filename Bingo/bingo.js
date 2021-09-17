// array of users objects
let gameResults = []; 

// function that creates the user object
function userGameResult (name, card, rounds, points) { 
    return {
        name: name,
        card: card,
        rounds: rounds,
        points: points
    }   
};

// Bingo game 
let bingoCard = [1, 2, 3, 4, 5];
let bingoCard2 = [5, 4, 3, 2, 1];

// Player 1
playBingo();

// Player 2
playBingo();

console.log("And the order is: \n");
gameResults.sort((a,b) => b.points - a.points); 
gameResults.forEach(user=>console.log("Name: " + user.name + " points: " + user.points + "\n"))



function playBingo() {
    name = prompt('Welcome. What is your name? ');

    console.log(`${name}, this is your card.`);
    let myBingo = bingoCard;
    console.table(myBingo);
    
    let answer = prompt('Do you want this Bingo card or another? ','This one.');
    if (answer !== 'This one.') {
        myBingo = bingoCard2;
        console.table(myBingo);
    }

    let maxPoints = 1000;
    console.log(`The maximum number of points when finishing the game is ${maxPoints}. Each extra move deducts one point.`);

    let newRound = 0;
    do {
        askTurn = prompt('Do you want to continue playing? ','yes');
        if (askTurn == 'yes') {

            let randomNum = randomNumberGeneration(1, 6);

            let modifBingo = myBingo.map ( function (item) {
                if (item === randomNum) {
                    item = 'X';
                } 
                return item;
            });
            console.table(modifBingo);
            myBingo = modifBingo;

            const found = modifBingo.find(element => typeof element === 'number');
            if (found) {
                newRound = newRound + 1; // if there are still numbers to discover ask again for a new round
            } else {
                console.log('LINEA');
                let finalPoints = maxPoints + myBingo.length - newRound;
                gameResults.push( userGameResult(name, myBingo, newRound, finalPoints));
                return;
            }

        } else {
            newRound = false;
            console.log('Ciao!');
            let finalPoints = 0;
            gameResults.push( userGameResult(name, myBingo, newRound, finalPoints));
            return;
        }         
    
    } while (newRound);  

    function randomNumberGeneration(min, max) {  
        return Math.floor(
        Math.random() * (max - min) + min
        )
    }

};

