let answer = '';

/* From 1-100, if n is divisible by 3 and 5, FizzBuzz is printed. 
   If n is divisble by 3, then Fizz is printed. 
   If n is divisible by 5, then Buzz is printed. */
for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        answer += 'FizzBuzz ';
    }
    else if (n % 3 == 0) {
        answer += 'Fizz ';
    } 
    else if (n % 5 == 0) {
        answer += 'Buzz ';
    }
    else {
        answer += `${n} `;
    }
}

console.log(answer);
