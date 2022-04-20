// console.log("I'm alive muahahaha, mo son cazz");
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input
   
const btn = document.querySelector('button');
console.log(btn)

btn.addEventListener('click', isPara);

function isPara(){
    const palindroma = document.querySelector('#input-pala').value;
    console.log(palindroma);
    const palindromaLength = palindroma.length - 1;
    console.log(palindroma.length);
    const saveAbc = [];

    for(let i = palindromaLength; i >= 0; i--){
        saveAbc.push(palindroma.charAt(i));
    }
    console.log(saveAbc);
    let controll = "";
    for(let i = 0; i < saveAbc.length; i++ ){
        controll += saveAbc[i]
    }
    console.log(controll);

    if(controll === palindroma){
        document.querySelector('#span-pala').innerHTML = `${palindroma} è un palindroma`;
        console.log(true);
    }else{
        console.log(false);
        document.querySelector('#span-pala').innerHTML = `${palindroma} non è un palindroma`;
    }
    document.querySelector('#input-pala').innerHTML = "";
    console.log("arrivo fino a qui")
}
    


    



    


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Bonus: L’inserimento avviene tramite un campo input

 const userNamber = 5;
 const userChoise = "dispari";


 const pc = Math.ceil(Math.random()*5);

 console.log(pc)

 let sum = userNamber + pc;

 let pari = false;

 if(!(sum % 2)){
     pari  = true;
 }
 console.log(pari)

 if(pari && userChoise === "pari"){
    console.log(`il pc ha scelto ${pc} la somma è ${sum} : pari hai vinto`);
 }else if(!pari && userChoise === "dispari"){
    console.log(`il pc ha scelto ${pc} la somma è ${sum} : dispari hai vinto`);
 }else if(pari && userChoise === "dispari"){
    console.log(`il pc ha scelto ${pc} la somma è ${sum} : pari hai perso`);
 }else{
    console.log(`il pc ha scelto ${pc} la somma è ${sum} : dispari hai perso`);
 }