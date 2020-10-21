// console.log('hello');

/*
Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)
*/


// UTENTE SCEGLIE NUMERO TRA 1 E 5 QUINDI PROMPT "OBBLIGATO"

do {
    alert('inserisci un numero tra 1 e 5');
    var user_number = parseInt(prompt('numero'));
} while ((user_number <= 0) || (user_number > 5));
console.log('il numero scelto da te è : ' + user_number);

// L'UTENTE SCEGLIE PARI O DISPARI QUINDI SECONDO PROMPT

var even = false;
var odd = false;

do {
    var even_odd = prompt('scegli pari o dispari');
    if (even_odd == 'pari') {
        even = true;
        // console.log(even);
    } else if (even_odd == 'dispari') {
        odd = true;
        // console.log(odd);
    } else {
        alert('inserisci un valore valido');
    }

} while ((even != true) && (odd != true));

// SE EVEN == TRUE è PARI ALTRIMENTI è PER FORZA DISPARI DATO CHE è USCITO DAL CICLO E QUINDI HA SCELTO O PARI O DISPARI

if (even == true) {
    console.log('hai scelto pari');
} else {
    console.log('hai scelto dispari');
}

// IL COMPUTER GENERA UN NUMERO CASUALE TRA 1 E 5 QUINDI MATH RANDOM (LEGATO ALLA FUNZIONE A FINE PAGINA)


var cpu_number = getRandomNumbers();
console.log('il nostro numero è : ' + cpu_number);


// SOMMARE NUMERO UTENTE CON NUMERO PC(LEGATO ALLA FUNZIONE A FINE PAGINA)

var final_sum = sumNumbers(user_number, cpu_number);
console.log(final_sum);


// CAPIRE SE LA SOMMA è PARI O DISPARI CON MODULO

// DECRETARE IL VINCITORE


if (final_sum %2 == 0) {
    console.log('il numero è pari');
    if (even == true) {
        console.log('Hai vinto');
    } else {
        console.log('Hai perso');
    }
} else {
    console.log('il numero è dispari');
    if (odd == true) {
        console.log('hai vinto');
    } else {
        console.log('Hai perso');
    }
}



// METTO TUTTE LE FUNZIONI IN FONDO


function getRandomNumbers(min, max) {
    var min = 1;
    var max = 5;
    var number = Math.floor(Math.random() * (max - min + 1) )+ min;
    return number;
}

function sumNumbers(user_number, cpu_number){
    var result = user_number + cpu_number;
    return result;
}
