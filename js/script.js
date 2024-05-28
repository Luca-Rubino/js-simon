console.log('Js-simon')

let i, span, num1, num2, num3, num4, num5

// creo e inserisco la section nel dom
const section = document.createElement('section');
document.body.append(section);

// genero 5 numeri randomici e li inserisco in un array
let randomNum = [];
for(i=0; i < 5; i++){
    randomNum.push(Number.parseInt(Math.random() * 100, 10));
};

// creo gli span che conterranno i 5 numeri e li inserisco nel dom
for(i=0; i < 5; i++){
    span = document.createElement('span');
    section.appendChild(span);
    span.textContent = randomNum[i];
};

// creazione timer

setTimeout(rimozioneNumeri, 27000);// timer per rimuovere i numeri dal dom

setTimeout (quizNumeri, 30000);// timer per far partire il quiz




// Funzioni utilizzate

function rimozioneNumeri(){
    for(i=0; i < 5; i++){
        section.remove(span);
    };
}


function quizNumeri(){
    console.log('Timer funzionante');

    num1 = prompt(`Scrivi il primo numero`);
    num1 !== randomNum[0];
    if(num1 == randomNum[0]){
        num1 = true;
        console.log(num1);
    } else {
        num1 = false;
        console.log(num1);
    };

    num2 = prompt(`Scrivi il secondo numero`);
    num2 !== randomNum[1];
    if(num2 == randomNum[1]){
        num2 = true;
        console.log(num2);
    } else {
        num2 = false;
        console.log(num2);
    };

    num3 = prompt(`Scrivi il terzo numero`);
    num3 !== randomNum[2];
    if(num3 == randomNum[2]){
        num3 = true;
        console.log(num3);
    } else {
        num3 = false;
        console.log(num3);
    };

    num4 = prompt(`Scrivi il quarto numero`);
    num4 !== randomNum[3];
    if(num4 == randomNum[3]){
        num4 = true;
        console.log(num4);
    } else {
        num1 = false;
        console.log(num4);
    };

    num5 = prompt(`Scrivi il quinto numero`);
    num5 !== randomNum[4];
    if(num5 == randomNum[4]){
        num5 = true;
        console.log(num5);
    } else {
        num5 = false;
        console.log(num5);
    };

    console.log(randomNum);
};