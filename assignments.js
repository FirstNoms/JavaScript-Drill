//DRILL
let bill= 275;
let bill2 = 40;
let bill3 = 430;
let tip = bill3 <= 300 && bill3 >=50 ? bill3 * 0.5 : bill3 * 0.2;
console.log(`Your bill is ${bill3} and the tip is ${tip} and total amount is ${tip + bill3}`)


/**Steven wants to build a very simple tip calculator for whenever he goes eating in a
 restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
 300. If the value is different, the tip is 20%.
 Your tasks:
 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
 this. It's not allowed to use an if/else statement � (If it's easier for you, you can
 start with an if/else statement, and then try to convert it to a ternary
 operator!)
 2. Print a string to the console containing the bill value, the tip, and the final value
 (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
 316.25”
 Test data:
 § Data 1: Test for bill values 275, 40 and 430
 Hints:
 § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 § Value X is between 50 and 300, if it's >= 50 && <= 300 �
 GOOD LUCK
 * */
