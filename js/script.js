//console log 
console.log("ok js")

// recupero elemento dal DOM
const blackboard = document.getElementById('blackboard');


// creo un ciclo che ripeta un numero da 1 a 100
for(let i = 1; i <= 100; i++) {
    //creo variabile frizz
    let word = '';
    //controllo i multipli di i
    if(!(i % 3) && !(i % 5)){
        word = 'FizzBuzz'
    }else if(!(i % 3)){
        word = 'Fizz';
    } else if (!(i % 5)){
        word = 'Buzz'
    }else{
        word = i
    }

    console.log(word);

    blackboard.innerText += '  ' + word;
}




