import * as fsPromise from 'fs/promises'

async function advent() {
    const file = await fsPromise.open('input.txt', 'r');
    let number1: string = "";
    let number2: string = "";
    let reverseString: string = "";
    let total: number = 0;

    for await (const line of file.readLines()) {
        for (let i = 0; i < line.length; i++){
            if(Number(line[i])){
                number1 = line[i];
                break;
            }
        }
        for (let char of line) {
            reverseString = char + reverseString;
        }
        for (let i = 0; i< reverseString.length; i++) {
            if(Number(reverseString[i])){
                number2 = reverseString[i];
                break;
            }
        }
        let combine: string = number1 + number2 
        let combineNumber: number = +combine;
        total = total + combineNumber;
    }
    console.log(total);
}

advent();