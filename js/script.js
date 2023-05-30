//console log 
console.log("ok js")
// recupero elemento dal DOM
const blackboard = document.getElementById('blackboard');
// creo un ciclo che ripeta un numero da 1 a 100
for(let i = 1; i <= 100; i++) {
    //creo variabile word
    let word = '';
    //creo variabile backcolor
    let backcolor = '';
    //controllo i multipli di i
    if(!(i % 3) && !(i % 5)){
        word = 'FizzBuzz'
        backcolor = 'red';
    }else if(!(i % 3)){
        word = 'Fizz';
        backcolor = 'yellow';
    } else if (!(i % 5)){
        word = 'Buzz'
        backcolor = 'orange';
    }else{
        word = i
        backcolor = 'acqua';
    }
    //console log
    console.log(word);
    //stampo in pagina
    blackboard.innerHTML += `<div class="${backcolor}">${word}</div>`;
}




