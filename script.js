// PALIDROME EX
let userWord = prompt('Inserisci una parola'); //Lascio scegliere all'utente la parola

function reverseString(strElement) { //Creo la funzione
    let palindromeUserWord = ''; //Creo una variabile STRINGA vuota
    for (let i = strElement.length - 1; i >= 0; i--) { //CICLO all'interno degli indici della parola scelta partendo da 0 e sottraggo il valore dell'indice ad ogni ciclo, cosi da poter "ribaltare" la parola
        palindromeUserWord += strElement[i] //cambio il valore della variabile con L'indice della parola ad ogni ciclo

    }
    return palindromeUserWord //Ritorno la variabile con la parola INVERTITA
}

//METHOD WITH SPLIT REVERSE JOIN

let reversedWord = userWord.split('').reverse().join('');
console.log(reversedWord); // !DEBUG!

if (userWord === reversedWord) {
    console.log('the word is a palindrome')
}
else {
    console.log('is not a palindrome')
}


console.log(reverseString(userWord)); //STAMP
console.log(reverseString('! OTUIA')); //STAMP "help"



///////////////////////////////////////////////////////////////////////

// Pari o Dispari EX
let userChoice = prompt('Digita Pari o Dispari');
let userNumber = (prompt('Digita un numero da 1 a 5'));
let pcNumber = randomNumber(); // INVOKE FUNCTION !DEBUG!
let nMax = 5;
let nMin = 1;
let sum = Number(pcNumber) + Number(userNumber);
let even = 'pari';
let odd = 'dispari';

//DEBUGGING
console.log(`${userNumber} è il numero scelto dall'utente`); // !DEBUG!
console.log(`${pcNumber} è il numero scelto dal computer`); // !DEBUG!
console.log(`${sum} è la somma dei due numeri`); // !DEBUG!

//if statement for odd or even CONTROL
if (userChoice == odd) {
    /* console.log(userChoice) */
    userChoice = odd;
    console.warn('The user choice is odd')

} else if (userChoice == even) {
    /* console.log(userChoice) */
    userChoice = even;
    console.warn('The user choice is even')
} else if (userChoice === Number()) {
    console.error('ERROR, try with Pari o Dispari')
} else {
    console.error('ERROR, try with Pari o Dispari')
}

//if statement for numbers from 1 to 5 CONTROL
if (userNumber < nMin) {
    console.error('This number is Wrong, try with numbers from 1 to 5')
} else if (userNumber > nMax) {
    console.error('This number is Wrong, try with numbers from 1 to 5')
} else if (userNumber == Number(userNumber)) {
    console.warn(`il numero inserito è valido`)
} else {
    console.error('This is not a Number, Retry')
}

//Function for Random Number Generation
/**
 * Get random numbers from 1 to 5
 * @returns nValue 
*/
function randomNumber() {
    let nValue = Math.floor(Math.random() * 5 + 1); //variabile per numero random
    return nValue //return "pcNumber"
}

//Function for Odd/Even Check
/**
 * Odd or Even Checker
 * @returns sumCheck
*/
function choiceCheck() {
    sumCheck = sum;
    if (sumCheck % 2 === 0 && userChoice == even) {
        console.log('Il Giocatore ha fatto la scelta giusta') //Player's win only if the sum is even

    } else if (sumCheck % 3 === 0 && userChoice == odd) {
        console.log('Il Giocatore ha fatto la scelta giusta')//Player's win only if the sum is even
    } else {
        console.log('il Computer ha vinto')//Pc's win
    }
    return sumCheck //RETURN VALORE DI SumCheck
}

choiceCheck() //INVOKE Odd/Even Check Function
