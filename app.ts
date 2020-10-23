function add(n1: number, n2: number) { //can set return type of function w/ : tye after the parenthesis
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12));