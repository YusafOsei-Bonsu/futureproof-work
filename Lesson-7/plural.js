// List of food in my packed lunch
let packedLunch = ['biscuit', 'biscuit', 'biscuit', 'biscuit', 'biscuit', 'biscuit'];

// The item
let item = 'biscuit';

// The number of things in my packed lunch
let count = packedLunch.length;

const plural = (item, count) => count > 1 ? `I have ${count} ${item}s` : `I have ${count} ${item}`;

console.log(plural(item, count));