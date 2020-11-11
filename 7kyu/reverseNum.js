Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

function reverse(n){
    let rev = 0; // declare a new variable and initialize to the value 0
    while (n) { //while the input number does not equal 0
        rev = rev * 10 + n % 10; //multiply by 10, n % 10 will return first (right-moist) digit (4)
        n = Math.floor(n/10);
    }
    return rev;
}

console.log(reverse(1234)) // 4321
//rev = 0 * 10 = 0 + 1234 % 10 = 4
//n = Math.floor(1234/10) = 123
//rev = 4, n = 123
//rev = 4 * 10 = 40 + 123 % 10 = 3 == 40 + 3 = 43
//n = 123 % 10 = 12
//rev = 43 n = 12
//43 * 10 = 430 + 12 mod 10 = 432
//n = 2 / 10 = 1.2 = Math.floor(1.2) = 1
//rev = 432 n = 1
//4321
