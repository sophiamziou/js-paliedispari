
let parola = prompt('inserisci parola');

let parolaInvertita = palindroma(parola);

function palindroma(parl){
    parola2 = parl.split("").reverse().join('');
    return parola2;
}

if (parolaInvertita == parola){
    console.log('la parola è palindroma');
}

else{
    console.log('la parola non è palindroma');
}