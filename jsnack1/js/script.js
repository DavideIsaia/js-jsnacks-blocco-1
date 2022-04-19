// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all’utente la prima parola
const firstWord = prompt("Inserisci una parola");
console.log(firstWord);

// chiedo all’utente la seconda parola
const secondWord = prompt("Inserisci un'altra parola");
console.log(secondWord);

// calcolo lunghezza parole
const firstLenght = firstWord.length;
const secondLenght = secondWord.length;

// confronto le parole
let result;
if (firstLenght < secondLenght) {
    result = `la parola più corta è ${firstWord} e la più lunga è ${secondWord}`;
} else if (firstLenght > secondLenght) {
    result = `la parola più corta è ${secondWord} e la più lunga è ${firstWord}`;
} else {
    result = `le parole ${firstWord} e ${secondWord} sono uguali`;
}

// stampo in console e pagina
console.log(result);
document.getElementById('message').innerHTML = result;