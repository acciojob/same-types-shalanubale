function isSameType(value1, value2) {
  //your js code here
	console.log(isSameType(1, 3));        // true
console.log(isSameType("hey", "hi")); // true
console.log(isSameType(NaN, NaN));    // true
console.log(isSameType("3", 3));      // false
console.log(isSameType(undefined, null)); // false
console.log(isSameType({}, []));      // false (both are objects, but different kinds)

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
