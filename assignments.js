'use strict';
//Introduction To Arrays.

let percentageOfWorld4 =function (population) {
    let worldPercentage = (population / 7900) * 100;
    return (worldPercentage);
}

let population = [20000, 10000, 30000, 50000]
console.log(population)
console.log(population.length)

let percentages = [percentageOfWorld4(population[3])]



console.log(`percentages ${percentages}`)
console.log(percentageOfWorld4(population[0]))
console.log(percentageOfWorld4(population[1]))
console.log(percentageOfWorld4(population[3]))


/*1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage value
* */