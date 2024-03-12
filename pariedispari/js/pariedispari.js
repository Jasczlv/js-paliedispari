// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pariODispari = prompt("Pari o Dispari?");
if (pariODispari === "pari") {
  let numeroUtente = parseInt(prompt("inserisci numero da 1 a 5"));
  if (numeroUtente < 6) {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(numeroUtente);
    console.log(randomNumber);
    let sommaNumeri = numeroUtente + randomNumber;
    console.log(sommaNumeri);
    if (sommaNumeri % 2 === 0) {
      console.log("Hai vinto");
    } else {
      console.log("Hai perso");
    }
  } else {
    let numeroUtente = prompt("inserisci numero da 1 a 5");
  }
} else {
  let numeroUtente = parseInt(prompt("inserisci numero da 1 a 5"));
  if (numeroUtente < 6) {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(numeroUtente);
    console.log(randomNumber);
    let sommaNumeri = numeroUtente + randomNumber;
    console.log(sommaNumeri);
    if (sommaNumeri % 2 !== 0) {
      console.log("Hai vinto");
    } else {
      console.log("Hai perso");
    }
  } else {
    let numeroUtente = prompt("inserisci numero da 1 a 5");
  }
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.
