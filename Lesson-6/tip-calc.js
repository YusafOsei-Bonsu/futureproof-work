// Calculates the tip
function calculateTip(totalBill, service) {
    // If the rating is between 1 and 3, return 0
    if (service > 0 && service <= 3) {
        return 0;
    }
    // Return 10% of the total bill if the rating is between 4 and 7
    else if (service >= 4 && service <= 7) {
        return totalBill * 0.1;
    }
    // Return 20% of the total bill if the rating is between 4 and 7 
    else if (service >= 8 && service <= 10) {
        return totalBill * 0.2;
    }
};

// The total cost of the meal
var totalBill =  parseInt(prompt('How much was your total bill?'));

// Service rating
var rating = parseInt(prompt('How much would you rate this service on a scale of 1-10?'));

/* Error handling for service rating */
while ((rating < 0 || rating > 10) || (Number.isInteger(rating)===false)) {
    rating = parseInt(prompt('INVALID INPUT! Please enter a rating between 1 and 10..'));
}

console.log(`Total Bill: ${totalBill} ${'\n'}Service: ${rating}`);

var tip = calculateTip(totalBill, rating);
console.log(tip);