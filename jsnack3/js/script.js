// Calcola la somma e la media dei primi 10 numeri.

// dichiaro la variabile somma, altrimenti sarà undefined
let somma = 0;
let media;

for (let i = 0; i <= 10; i++) {
    // incremento
    somma += i;
    // faccio la media
    media = somma / 10;
}

// stampo il risultato
console.log("La somma dei numeri da 1 a 10 è", somma, "e la media è", media);
document.getElementById('message').innerHTML = `La somma dei numeri da 1 a 10 è ${somma} e la media è ${media}.`;