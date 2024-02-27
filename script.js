// PALIDROME EX

let userWord = prompt('Inserisci una parola'); //Lascio scegliere all'utente la parola

function reverseString(strElement) { //Creo la funzione
    let palindromeUserWord = ''; //Creo una variabile STRINGA vuota
    for (let i = strElement.length - 1; i >= 0; i--) { //CICLO all'interno degli indici della parola scelta partendo da 0 e sottraggo il valore dell'indice ad ogni ciclo, cosi da poter "ribaltare" la parola
        palindromeUserWord += strElement[i;] //cambio il valore della variabile con L'indice della parola ad ogni ciclo

    }
    return palindromeUserWord //Ritorno la variabile con la parola INVERTITA
}
console.log(reverseString(userWord)); //STAMP

console.log(reverseString('SperoFunzioniPerchèSennòMiAmmazzo')); //STAMP "help"



///////////////////////////////////////////////////////////////////////