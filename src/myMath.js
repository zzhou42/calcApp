/**
 * @file myMath.js
 * @module myMath
 * @description A simple math module that provides basic arithmetic operations.
 * @requires {@link https://nodejs.org/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 * @copyright Copyright © 2026 by Zhen Yu Zhou. All rights reserved.
 */

// Internal imports

// External imports
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}.`;

/**
 * @function add
 * @description Adds two numbers and returns the result.
 * @param {integer} a The first number to add.
 * @param {integer} b The second number to add.
 * @returns {integer} The sum of the two numbers.
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 */
function add(a, b) {
    let functionName = add.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`a is: ${a}`);
    console.log(`b is: ${b}`);
    let returnData = 0;
    if (a && b) {
        returnData = a + b;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

/**
 * @function subtract
 * @description Subtracts the second number from the first and returns the result.
 * @param {integer} a The first number to subtract.
 * @param {integer} b The second number to subtract.
 * @returns {integer} The difference of the two numbers.
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 */
function subtract(a, b) {
    let functionName = subtract.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`a is: ${a}`);
    console.log(`b is: ${b}`);
    let returnData = 0;
    if (a && b) {
        returnData = a - b;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

/**
 * @function multiply
 * @description Multiplies two numbers and returns the result.
 * @param {integer} a The first number to multiply.
 * @param {integer} b The second number to multiply.
 * @returns {integer} The product of the two numbers.
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 */
function multiply(a, b) {
    let functionName = multiply.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`a is: ${a}`);
    console.log(`b is: ${b}`);
    let returnData = 0;
    if (a && b) {
        returnData = a * b;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

/**
 * @function divide
 * @description Divides the first number by the second and returns the result.
 * @param {integer} a The first number to divide.
 * @param {integer} b The divisor.
 * @returns {integer} The quotient of the two numbers.
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 */
function divide(a, b) {
    let functionName = divide.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`a is: ${a}`);
    console.log(`b is: ${b}`);
    let returnData = 0;
    if (a && b) {
        returnData = a / b;
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

/**
 * @function factorial
 * @description Computes the factorial of a number using recursion and returns the result.
 * @param {integer} n The number to compute the factorial of.
 * @returns {integer} The factorial of the number.
 * @author Zhen Yu Zhou
 * @date 2026/01/22
 */
function factorial(n) {
    let functionName = factorial.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`n is: ${n}`);
    let returnData = 0;
    if (n === 0) {
        returnData = 1;
    } else {
        returnData = n * factorial(n - 1);
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

module.exports = {
    ['add']: (a, b) => add(a, b),
    ['subtract']: (a, b) => subtract(a, b),
    ['multiply']: (a, b) => multiply(a, b),
    ['divide']: (a, b) => divide(a, b),
    ['factorial']: (n) => factorial(n)
}