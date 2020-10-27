let userInput : unknown;
let userName : string;

userInput = 5;
userInput = 'Max';
// userName = userInput; //gives compile error because unknown type of userInput
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occured!', 500);