let year = 2000; 
console.log(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0) ? 'высокосный': 'не высокосный');

let number = 15;
if (number % 3 == 0 && number % 5 == 0){
    console.log('FizzleBuzz');
}
    else if (number % 3 == 0){
        console.log('Fizzle');
    }
       else if (number % 5 == 0){
            //console.log('Buzz');
        }
    else {
        console.log('Wrong');
    }

   