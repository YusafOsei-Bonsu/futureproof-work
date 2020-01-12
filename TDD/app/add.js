// Returns the sum of first two numbers
exports.addTogether = function(integers){
    if (Array.isArray(integers) ) {
        if (checkType(integers) === true) {
            return add(integers);
        } else {
            return "Numbers must be an array of numbers";
        }
    } else {
        return "Numbers must be an array";
    }
}

function checkType(numbers) {
    for (let i=0; i<numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return false;
        }
    }

    return true;
}

function add(numbers) {
    var sum  = 0;
    numbers.forEach(number => sum += number);
    return sum;
}