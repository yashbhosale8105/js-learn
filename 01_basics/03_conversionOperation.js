let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber =  Number(score) //conersion of all datatypes in number
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
//After converting the outputs for each data type the outputs are 
if its a:
String("33") => 33
String("33abc") => Nan(not null number)
null => 0
undefined => Nan
True => 1 ; False => 0
*/

let IsLoggedIn = "" // take any name here after let and used that after let boolean    (prefer to use IsLoggedIn)

let booleanIsLoggedIn = Boolean(IsLoggedIn) //converting into boolean
console.log(booleanIsLoggedIn);

/*
1 => true
0 => false
"" => false
string eg ("Yash") => true
*/


let someNumber = 33

let stringNumber = String(someNumber) //convert into string
console.log(typeof stringNumber);