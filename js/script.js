console.log('Js-simon')


// scrivere in console 5 numeri
for(let i=1;i<5+1;i++){
    const section = document.createElement('section')
    document.body.append(section)
    let span = document.createElement('span')
    section.appendChild(span)
    span.textContent = Number.parseInt(Math.random()*i,10)
}

// creazione timer
setTimeout (myFunction, 30000)
    function myFunction(){
        console.log('Timer funzionante')
        prompt('quali sono i numeri presenti?')
    }
