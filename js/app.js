// nome repo: js-paliedispari

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// ****************************************************************************************************************************

// Palidroma

// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma:
const parolaUtente = prompt("inserisci parola"); // chiedo parola all'utente
const parolaArray = parolaUtente.split(""); // trasformo la parola in array e lo salvo in una variabile
const stringUtente = parolaArray.toString(); //trasformo l'array in string
// console.log(stringUtente);

const reversed = parolaArray.reverse(""); //trasformo l array in un array dal ordine inverso che salvo in un'altra variabile
const stringReversed = reversed.toString(); //trasformo l array inverso in una stringa e lo salvo in una variabile
// console.log(stringReversed);

parolaPalindroma();

function parolaPalindroma(parola) {
  // la funzione deve ritornare true se la parola è palindroma
  parola = false;
  if (stringUtente === stringReversed) {
    console.log(parolaUtente, " è palindroma");
    return true;
  } else {
    console.log(parolaUtente, " non è palindroma");
  }
}

// deve ritornare false se la parola non è palindroma

// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

// ****************************************************************************************************************************
