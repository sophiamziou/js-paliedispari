
let pari_dispari = prompt('insersci pari o dispari');

let index = 0;

while (index < 5){
    if (pari_dispari == 'pari' || pari_dispari == 'dispari'){
        console.log(pari_dispari)
        index = 5;
    }

    else{
        alert('inserisci un valore valido');
        pari_dispari = prompt('insersci pari o dispari');
    }
}

let numero_player = parseInt(prompt('inserisci numero da 1 a 5'));

let i = 0;

while (i < 2){
    if (numero_player >= 1 && numero_player <= 5){
        console.log(numero_player)
        i = 2;
    }

    else{
        alert('inserisci un valore valido');
        numero_player = parseInt(prompt('inserisci numero da 1 a 5'));
    }
}


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

let numero_pc = random(1, 5);

console.log(numero_pc);

let somma = numero_player + numero_pc;

console.log(somma);

if (pari_dispari == 'pari' && somma % 2 == 0 ){
    console.log('hai vinto')
}

else if (pari_dispari == 'dispari' && somma % 2 != 0 ){
    console.log('hai vinto')
}

else{
    console.log('hai perso')
}


