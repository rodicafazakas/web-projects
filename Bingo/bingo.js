// get user input and see it in the terminal of Node.js 
const prompt = require('prompt-sync')({sigint: true});  

// array of users objects
let bingoUsers = []; 
let ranking = [];

// function that creates the user object
function userInfo (name, card, rounds, points) { 
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


function bingo() {
    name = prompt('Welcome. What is your name? ');

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
                ranking.push([name, finalPoints]);
                //console.log(ranking);
                //console.log(Object.entries(userInfo(name, myBingo, newRound, finalPoints))[0][1]);
                //console.log(Object.entries(userInfo(name, myBingo, newRound, finalPoints))[3][1]);
                bingoUsers.push( userInfo(name, myBingo, newRound, finalPoints));
                return;
            }

        } else {
            newRound = false;
            console.log('Ciao!');
            let finalPoints = 0;
            bingoUsers.push( userInfo(name, myBingo, newRound, finalPoints));
            return;
        }         
    
    } while (newRound);  

    function randomNumberGeneration(min, max) {  
        return Math.floor(
        Math.random() * (max - min) + min
        )
    }

};

bingo();

console.log(bingoUsers);

console.log(bingoUsers.length);

bingo();

console.log(bingoUsers);


console.log(`And the order is: ` + ranking.sort((a,b) => b[1]-a[1]));