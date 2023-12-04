import * as fsPromise from 'fs/promises'

async function advent() {
    const file = await fsPromise.open('input.txt', 'r');
    let number1: string = "";
    let number2: string = "";
    let reverseString: string = "";
    let total: number = 0;
    type AlphaNumbersDict = {[key: string]: string};
    
    const  alphaNumbers: AlphaNumbersDict = {
            "one": "o1ne",
            "two": "t2wo",
            "three":"t3hree",
            "four":"f4our",
            "five":"f5ive",
            "six":"s6ix",
            "seven":"s7even",
            "eight":"e8ight",
            "nine": "n9ine"
        } 
    for await (var line of file.readLines()) {
        for(let key in alphaNumbers) {
            if (alphaNumbers.hasOwnProperty(key)) {
                while(line.includes(key)) {
                    const replacement = alphaNumbers[key];
                    line = line.replace(key, replacement);
                }
            }
        }
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
        console.log("Total: " + total);
    }
}
advent();