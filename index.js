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
