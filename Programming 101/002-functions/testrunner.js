import { Console } from 'console';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const assert = require('assert').strict;
import * as functions from './functions.js';

let testsFailed = 0;

function testSubtractFunction() {
	let testOne;
	try {
		testOne = functions.subtract(4, 3);
		assert(testOne, 1);
	} catch (error) {
		console.error("Failed test: Subtract Function.");
		console.error("The return result evaluates to " + testOne + " and is not equal to 1");
		console.error("Did you subtract the first number by the second and return it? Num1 - Num2\n");
		testsFailed += 1;
	}
}

function testSquareFunction() {
	let testTwo;
	try {
		testTwo = functions.squared(2);
		assert(testTwo, 4);
	} catch (error) {
		console.error("Failed test: Square Function.");
		console.error("The return result evaluates to " + testTwo + " and is not equal to 4");
		console.error("Did you multiply the number by itself? Num1 * Num1\n");
		testsFailed += 1;
	}
}

function testTimesFiveFunction() {
	let testThree;
	try {
		testThree = functions.timesFive(5);
		assert(testThree, 25);
	} catch (error) {
		console.error("Failed test: Times Five Function.");
		console.error("The return result evaluates to " + testThree + " and is not equal to 25");
		console.error("Did you multiply the number by 5? Num1 * 5\n");
		testsFailed += 1;
	}
}

function testReturnStringFunction() {
	let testFour;
	try {
		testFour = functions.returnString();
		assert(testFour, "Hello world!");
	} catch (error) {
		console.error("Failed test: Return String Function.");
		console.error("The return result evaluates to " + testFour + " and is not equal to 'Hello world!'");
		console.error("Did you return the string, 'Hello World!'?\n");
		testsFailed += 1;
	}
}



testSubtractFunction();
testSquareFunction();
testTimesFiveFunction();
testReturnStringFunction();

if (testsFailed == 0) {
	console.log("All tests passed!");
} else {
	console.log(testsFailed + " tests failed");
}
