/**Drill.
 * BMI: mass / height**2
 *
 * */

/** let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markSecondMass = 95;
let markSecondHeight = 1.88;
let johnSecondMass = 85;
let johnSecondHeight = 1.76;

let markBMI = markMass /(markHeight **2);
let johnBMI = johnMass /(johnHeight ** 2);

let markSecondBMI = markSecondMass/ (markSecondHeight * markSecondHeight);
let johnSecondBMI = johnSecondMass/(johnSecondHeight * johnSecondHeight);

console.log("This is Mark's first BMI result "+ markBMI);
console.log("This is John's first BMI result "+ johnBMI);
console.log("This is Mark's second BMI result "+ markSecondBMI);
console.log("This is John's second BMI result "+ johnSecondBMI);

let markHigherBMI = markBMI > johnBMI;
let johnHigherBMI = johnSecondBMI > markSecondBMI;
console.log(markHigherBMI, johnHigherBMI)
*/

//TEMPLATE LITERALS
/**let age = 50;
let gender = "female";
let job = "Nurse"
let name = "ChiNomso"
console.log(`My name is ${name}, I am a ${gender} ${job}, and I am ${age} years Old.`)
*/

//CONDITIONAL STATEMENTS

let population = 130000000;
let country ="Nigeria";
const average = 33000000;

if(population > average){
    console.log(`${country}'s population is above the fixed average of ${average}`)
}else{
    console.log(`${country}'s population is ${(average-population)/2} below the fixed average of ${average}`)
}


