/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// questa function stampa sulla console i numeri 6 numeri dal 0 fino al 5

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// questa function cerca de prendere i numeri pari ma ha uno errore gia che un solo iqual signifca asegnamento, per risolvere deve sul tanto metere altri due iqual


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// come é stato visto la prima function, questa function cerca di fare lo stesso ma ha il errore in questo caso é  che per dividere gli argumente se deve usare punto e virgola



// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 === 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

// cerca di fare un´altro array con solo i numeri pari ma ha degli errori prima di tutto il punto e virgola non va dopo la´umento di i e come secondo il condicionale deve andare con altri due iqual

