console.log('Js-simon')

let i, span, num1, num2, num3, num4, num5

const section = document.createElement('section');

document.body.append(section);


let randomNum = [];
for(i=0; i < 5; i++){
    randomNum.push(Number.parseInt(Math.random() * 100, 10));
};


for(i=0; i < 5; i++){
    span = document.createElement('span');
    section.appendChild(span);
    span.textContent = randomNum[i];
}

// creazione timer
setTimeout (quizNumeri, 30000);

function quizNumeri(){
    console.log('Timer funzionante');
    num1 = prompt(`scrivi il primo numero`);
    num1 !== randomNum[0];
    if(num1 == randomNum[0]){
        num1 = true;
        console.log(num1);
    } else {
        num1 = false;
        console.log(num1);
    };
};