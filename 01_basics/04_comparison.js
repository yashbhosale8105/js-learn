console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<1); // false
console.log(2==1);// false
console.log(2!=1);// true

console.log('2'==2);// true
console.log('2'===2);// false

//datatype must be same for comparison so use same datatypes

console.log(null > 0)// false
console.log(null == 0)// false
console.log(null >= 0)// true

//in js the comparison operators work differently for different datatypes
//the comparison operators convert the operands to numbers (like for null into 0)
//so the null becomes 0 and 0 is > 0  is false but for 0 >= 0 it is true
//but for equality operator null is only equal to undefined and nothing else

//undefined always give value false when compared with any other datatype using comparison operators
console.log(undefined > 0)// false
console.log(undefined < 0)// false
console.log(undefined == 0)// false

// ===

console.log("2"=== 2); // false
// here the datatypes are different so it returns false without checking the values