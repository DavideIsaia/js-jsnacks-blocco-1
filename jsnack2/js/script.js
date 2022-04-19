// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// creo l'array
const box = [];

for (let i = 0; i < 6; i++) {
    // inserisco 6 volte un numero
    let = element = parseInt(prompt("Inserisci un numero"));
    console.log(element);

    // se il numero è dispari lo metto in array
    if (element % 2 === 1) {
        box.push(element);
    }
}

// stampo l'array
console.log(box);
document.getElementById('message').innerHTML = `i numeri dispari inseriti nell'array sono: ${box}` ;