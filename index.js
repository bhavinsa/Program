// program to check if a number is prime or not
function checkIsPrime(input) {
    // take input from the user
    let number = parseInt(input);
    let isPrime = true;
    let msg;
    // check if number is equal to 1
    if (number === 1) {
        msg = "1 is neither prime nor composite number.";
        isPrime = null;
    }
    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            msg = `${number} is a prime number`;
        } else {
            msg = `${number} is a not prime number`;
        }
    }
    // check if number is less than 1
    else {
        msg = `${number} is not a prime number.`;
        isPrime = false;
    }
    return { msg, isPrime }
}

console.log(checkIsPrime(4));
