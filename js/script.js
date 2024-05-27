console.log('Js-simon')

let i, span, span1

const section = document.createElement('section');

document.body.append(section);


let randomNum = [];
for(i=0; i < 5; i++){
    randomNum.push(Number.parseInt(Math.random() * 100, 10));
};


for(i=0; i < 5; i++){
    span = document.createElement('span');
    section.appendChild(span);
    span.textContent = randomNum[i]
}

// creazione timer
setTimeout (myFunction, 30000);

function myFunction(){
    console.log('Timer funzionante')
    prompt('quali sono i numeri presenti?')
}
