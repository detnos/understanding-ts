function add(n1: number, n2: number) { //can set return type of function w/ : tye after the parenthesis
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

let combinedValues: (a: number, b: number) => number; //Function will accept any function () => number [takes any function that takes no parameters and returns a number]

combinedValues = add;
// combinedValues = 5; //runtime error even though TypeScript lets it compile w/o errors (combinedValues is type any so it allows the reassignment but later in the code we use combinedValues as a pointer to the function)

console.log(combinedValues(8,8));

addAndHandle(10, 20, (result)=>{
    console.log(result)
})