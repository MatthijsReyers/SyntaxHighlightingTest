// ttps://github.com/MatthijsReyers/SyntaxHighlightingTests
// Contributors: [Matthijs Reyers]

import * as config from './config';

const address = "127.0.0.1"
var data;

/**
 * @param {string} Name of person to greet.
 * @return {number} The number 55, always.
 */
export function sayHello(name) {
    console.log('hello'+name+'!');
    return 55;
}

let x = `
    <div>${address}</div>
    <div>${data.load()}</div>
    <div>${434 + 43904}</div>
    <div>${(address != null) ? 323 : 'invalid'}</div>
`;

typeCheckerLamba = obj => {
    if (obj === undefined)
        throw TypeError()
    else if (typeof obj == "boolean") {
        console.log("The type is boolean")
        return "bool"
    }
    else return typeof obj;
}

fetch('url.com').then(res => res.json()).then(data => console.log(data));

document.onload = () => {

    let options = {
        name: "application",
        year: 2012,
        score: 55.434
    }

    for (const key in options) {
        const value = object[key];
        console.log('key:'+key+', value:'+value);
    }

    let numbers = [
        1005,
        BigInt(223),
        98.3,
        1.1
    ]

    for (let i = 0; i < numbers.length; i++)
        console.log(numbers[i]);

    for (const num of numbers)
        console.log(num * 324);
}

async function doStuff() {
    var promise = await fetch('127.0.0.1/things.html');
    data = await promise.json();
}

class Shape {
    constructor() {
        // does nothing...
    }
}

class Square extends Shape {
    constructor(w, h) {
        super();
        this.width = w
        this.height = h
    }

    static getArea() {
        return this.width * this.height;
    }
}

let sq = new Square(10,6);
