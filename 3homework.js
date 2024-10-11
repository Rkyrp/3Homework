let year = 2000; 
console.log(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0) ? 'высокосный': 'не высокосный');

let number = 15;
switch (true) {
    case (number % 3 == 0 && number % 5 == 0):
        console.log("FizzBuzz");
        break;
    case (number % 3 == 0):
        console.log("Fizz");
        break;
    case (number % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log(number);
}

