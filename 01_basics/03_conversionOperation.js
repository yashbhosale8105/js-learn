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


// *************************Operation Conversion*************************

let value = 3
let negValue = -value
console.log(negValue); //-3

console.log(2+2); //4
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 to the power 2 => 4
console.log(2/2);
console.log(5%2); //gives the remainder => 1

// + operator is also used for concatenation
let str1 = "Hello " // can give space after hello as well or at the starting of yash
let str2 = "Yash"
console.log(str1 + str2); // Hello Yash


console.log("1" + 2); // "12"  string concatenation
console.log(1 + "2"); // "12"
console.log("1" - 2); // -1  here - works as a mathematical operation
console.log("1" * "2"); // 2 multiply honar he math operation
console.log("4" / "2"); // 2
console.log("1" + 2 + 2); // "122"  jar string asel tar to concatenate honar ani baki sagle string madhe convert honar
console.log(1 + 2 + "2"); // "32" jar left madhe number asel tar to te add honar nantar string madhe convert honar ani concatenate honar

// minus multiple ani divide direct hota jari string asel or number asel normal ans perform karun yeil
// fakta addition + madhe jara farak padto string asel tar concatenate karun deto baki madhe mathematical operation perform karto.
// addition madhe jar pahile string asel tar to concatenate karun deto baki madhe mathematical operation perform karto.
// ani jar pahile number asel tar to add karun deto nantar string madhe convert karun concatenate karun deto.