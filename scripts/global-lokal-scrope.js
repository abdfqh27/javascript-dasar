// global scope
let counter = 0;

function hitMe(){
    // local scope hitme
    counter++;
}

hitMe();

function first(){
    // local scope first
    let firstVariable = "first";
}
function second(){
    // local scope second
    let secondVariable = "second";
    console.info(secondVariable);
}

first();
second();

// global scope
console.info(firstVariable); // undefined
console.info(secondVariable); // second
 
console.log(counter); // 1

// NESTER FUNCTION SCOPE
function pertama(){
    let variablePertama = "pertama";
    
    function kedua(){
        console.log(variablePertama);
    }

    kedua();
}

pertama(); // pertama