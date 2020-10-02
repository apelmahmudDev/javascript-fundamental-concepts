
var func = function sayHello() {
    console.log('I love you baby');
    console.log('Where are you?');
    console.log('Do you like lolipop?');
}

// func();

function doubleIt (num) {
    var result = num * 2;
    return result;
}

var firstNum = doubleIt(4);
var secondNum = doubleIt(10);



function add(num1 = 5, num2 = 10) {         //set default value
    return num1 + num2;
}

var total = add(20, 10);

console.log(total);