console.log("1) STRING");
console.log("=========");
let name = "Yusaf";
console.log(`a. The length of my name is ${name.length} characters long.`);
let sentence = 'I dislike trains as a mode of transport';
console.log(`b. ${sentence.substring(10, 16)}`);
console.log(`c. ${'abcdefghijklmnopqrstuvwxyz'.charAt(4)}`);
console.log(`d. ${'shouty'.toUpperCase()} \n`);

console.log("2) NUMBER");
console.log("=========");
console.log(`a. ${1.23456789.toFixed(2)}`);
let n = parseInt("45");
console.log(`b. ${n}\n`);

console.log("3) ARRAY");
console.log("========");
let primaryColours = ['red', 'yellow', 'green', 'blue'];
let len = primaryColours.length;
console.log(`a. First: ${primaryColours[0]} | Last: ${primaryColours[len-1]}`);
// Appending orange to the end of the list
primaryColours.push("orange");
console.log(`b. ${primaryColours}`);
console.log(`c. ${primaryColours[2]}`);
console.log(`d. ${Math.min(...[23123, 2, -328, 0])}\n`);


console.log("4) FUNCTIONS");
console.log("============");
const flight = (country, flightLength, residence='London') => `From ${residence}, I will be taking a ${flightLength} flight to ${country}.`;
console.log(`a. ${flight('Paris, France', '7hr 3min')}`);