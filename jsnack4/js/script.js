// Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// inserisco il numero
let userNumber = parseInt(prompt("Inserisci un numero tra 1000 e 9999"));

// lo stampo in console e in pagina
console.log(userNumber);
document.getElementById('user-number').innerHTML = `Il numero che hai inserito è ${userNumber}.`;

// imposto la somma uguale a 0 per evitare errore undefined
let somma = 0;

// prendo il numero inserito dall'utente e finchè dà il resto di 10, lo sommo
while (userNumber) {
    somma += userNumber % 10;
    // prendo la parte intera della divisione del numero per 10
    userNumber = Math.floor(userNumber / 10);
}

// lo stampo in console e in pagina
console.log(somma);
document.getElementById('message').innerHTML = `La somma delle sue cifre è pari a ${somma}.`;