function FizzBuzz(n) {
    // If the number is divisible by 3 and 5, return 'FizzBuzz'
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    // Returns buzz if the number is divisible by ONLY 5
    else if (n % 5 === 0) {
        return 'Buzz';
    }
    // Returns buzz if the number is divisible by ONLY 3
    else if (n % 3 === 0) {
        return 'Fizz';
    } else {
        return n;
    }
}

console.log(FizzBuzz(30));