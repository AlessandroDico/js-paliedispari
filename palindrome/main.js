// console.log('hello');

/*
Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no
*/

// PRENDO UNA PAROLA CHE è UNA STRINGA es. PAROLA

// LA RENDO UN ARRAY  es. P  A  R  O  L  A

// INVERTO GLI ARRAY (ogni singola lettera è un array ora)  A  L  O  R  A  P

// RIFACCIO TORNARE GLI ARRAI IN STRINGA

// CONFRONTO SE è UGUALE A PRIMA (PALINDROMA) O è DIVERSA

// DOPO AVER FATTO LA FUNZIONE AGGIUNGO UN PROMPT PER DARE LA POSSIBILITA' ALL'UTENTE DI DARE IN INPUT UNA PAROLA E VEDERE SE E' PALINDROMA O MENO

var asking_word = prompt('inserisci una parola').toLowerCase();
console.log(asking_word);

if (palindrome(asking_word)) {  /*sarebbe come scrivere if (palindrome(asking_word) == true)*/
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
}

function palindrome(word) {

    var reversedWord = word.toLowerCase().split('').reverse().join('');

    if (word == reversedWord) {
        return true;
    } else {
        return false;
    }

}
