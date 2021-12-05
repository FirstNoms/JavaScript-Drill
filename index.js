let quality = "amazing";
let value = 40 +8 + 23-10
console.log(value);
console.log(quality);

//Functions
//No Parameter
function logger(){
    console.log(`I'm Nomso ChiNomso`)
}
logger();

//With Parameter
function describeCountry(country, population, capitalCity){
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`)
}

describeCountry('Finland', 6000000, 'Helsinki');
describeCountry("Nigeria", 10000000, "Abuja");
describeCountry("France", 90000000, "Paris");


//Function Declaration and Function expression
/**Function declaration is any function declared using the 'function' keyword followed by a function name.
 * Function expression is any function declared using the 'function' keyword but without a function name, also called an Anonymous function, and stored in a variable
 * */

//Function declaration vs Function Expression.

//-----Function Declaration
function percentageOfWorld1(country,population){
    let worldPercentage = (population/7900) * 100;
    console.log(`${country} has the population of ${population} people, so it's about ${worldPercentage}% of the world population`)
    //return worldPercentage;
}
percentageOfWorld1('Nigeria', 12000000);
percentageOfWorld1('Spain', 10000000);
percentageOfWorld1('France', 100000)


//Function Expression
let percentageOfWorld2 =function (country,population){
    let worldPercentage = (population/7900) * 100;
    return(`${country} has the population of ${population} people, so it's about ${worldPercentage}% of the world population`)
}
percentageOfWorld2("Nigeria", 20000);

//Arrow Functions
let percentageOfWorld3 = (country, population) => {
    let worldPercentage = (population/7900) * 100;
    return(`${country} has the population of ${population} people, so it's about ${worldPercentage}% of the world population`)
}

console.log(percentageOfWorld3("Nigeria", 13000));
console.log(percentageOfWorld3("spain", 23000));

let fruitJuice = apple => {
    return(`I have ${apple} apples and i will make ${apple} cups of fruit juice.`)
}
console.log(fruitJuice(10));


//Functions calling functions.
function percentageOfWorld5(population){
    let worldPercentage = (population/7900) * 100;
    return worldPercentage;
}
//Coding Challenge on  Functions

function describePopulation (country, population){
    return(console.log(`${country} has ${population}million people which is about ${percentageOfWorld5(population)}% of the world!`))
}
describePopulation("Nigeria", 103);
describePopulation("Spain", 250);
describePopulation("France", 25);

let checkWinner = (team1, team2,teamOneAverageScore,teamTwoAverageScore)=>{
    if(teamOneAverageScore > teamTwoAverageScore){
        return(console.log(`team ${team1} is the winner`));
    }else if(teamTwoAverageScore > teamOneAverageScore){
        return(console.log(`team ${team2} is the winner`));
    }else{
        return(console.log(`There is no winner`));
    }
}
let calcAverage = (team, firstScore, secondScore, thirdScore)=>{
    let average= (firstScore + secondScore + thirdScore)/3;
    (console.log(`The Average score of team ${team} is ${average}`));
    return average;
}

let teamOneAverageScore = calcAverage("Dolphin",90, 83,71 );
let teamTwoAverageScore = calcAverage("Kaola", 105, 50, 99);
checkWinner("Dolphin","Kaola", teamOneAverageScore, teamTwoAverageScore);
