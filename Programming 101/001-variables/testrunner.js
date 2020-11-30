import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const assert = require('assert').strict;
import * as variables from './variables.js';

let testsFailed = 0;

function testXValue() {
	try {
		assert(variables.x, true);
	}catch (error) {
		console.error("Failed test 1.");
		console.error("Y evaluates to " + variables.x + " and is not equal to true");
	}
}

function testYValue() {
	try {
		assert(variables.y, 23);
	} catch (error) {
		console.error("Failed test 2.");
		console.error("Y evaluates to " + variables.y + " and is not equal to 23");
		testsFailed += 1;
	}
}

function testZValue() {
	try {
		assert(variables.z,"Hello,World");
	} catch (error) {
		console.error("Failed test 3.");
		console.error("Z evaluates to " + variables.z + " and is not equal to 'Hello,World'");
		testsFailed += 1;
	}
}

testXValue();
testYValue();
testZValue();

if (testsFailed == 0) {
	console.log("All tests passed!");
} else {
	console.log(testsFailed + " tests failed");
}
