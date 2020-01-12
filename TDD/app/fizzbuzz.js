exports.FizzBuzz = (number) => {
    // If the input is a whole number
    if (Number.isInteger(number)) {
        // If the input is divisible by 3 & 5, return "FizzBuzz"
        if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
        // If the input is divisible by 3, return "Fizz"
        else if (number % 3 === 0) return "Fizz";
        // If the input is divisible by 5, return "Buzz"
        else if (number % 5 === 0) return "Buzz";
        // If the input isn't divisible by 3, 5 or both, return said input.
        return number;
    }
    // If no input has been defined
    else if (number === undefined) return "Nothing has been defined";

    return "Function input is not an integer";
}