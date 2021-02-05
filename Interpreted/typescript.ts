// https://github.com/MatthijsReyers/SyntaxHighlightingTests
// Contributors: Matthijs Reyers

// Possilbe import statements.
import * as config from './config';
import {foo, bar} from "module";
import "math";

// Constants & global variables.
const MAX_COUNTER: number = 9999;
var activeMonths: string[] = ['April','August','December'];

/**
 * Doctype signature for sayHello() function.
 * @param {string} Name of person to greet.
 * @return {number} The number 55, always.
 */
export function sayHello(name) {
    console.log(`hello ${name}!`);
    return 40 + 15;
}

async function logData() {
    let promise = await fetch('127.0.0.1/things.html');
    let data = await promise.json();
    console.log(data);
}

// Class that extends another class.
class Demo extends Object {
    
    name: string;

    // Constructor for classes.
    constructor() {
        super();
        this.name = "Demo class";
    };
    
    static fizzBuzz() {

        let checkLamba = (number) => {
            let output = ""
            if (number % 3)
                output += "FIZZ";
            if (number % 5)
                output = output + "BUZZ";
            console.log(output ? output : number);
        }

        for (let i = 0; i < MAX_COUNTER; i++)
            checkLamba(i);
    }
}

var typeCheckerLamba = obj => {
    if (obj === undefined)
        throw TypeError()
    else if (typeof obj == "boolean") {
        console.log("The type is boolean");
        return "bool"
    }
    else return typeof obj;
}

document.onload = () => {

    let options = {
        name: "application",
        year: 2012,
        score: 55.434
    }

    for (const key in options) {
        const value = options[key];
        console.log(`key:${key}, value:${value}`);
    }

    let numbers: number[] = [
        1005,
        223,
        98.3,
        1.1
    ]

    for (let i = 0; i < numbers.length; i++)
        console.log(numbers[i]);

    for (const num of numbers)
        console.log(num * 324);
}



interface Shape {
    getArea();
}

class Square implements Shape
{
    width: number;
    height: number;

    constructor(w, h)
    {
        this.width = w;
        this.height = h;
    }

    getArea() {
        return this.width * this.height;
    }
}

let sq: Square = new Square(10,6);
