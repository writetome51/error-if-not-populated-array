"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("error-if-not-array");
var isEmpty_notEmpty_1 = require("@writetome51/is-empty-not-empty");


function errorIfNotPopulatedArray(array) {
	errorIfNotArray_1.errorIfNotArray(array);
	if (isEmpty_notEmpty_1.isEmpty(array)) {
		throw new Error('Input must be an array that is not empty.');
	}
}
exports.errorIfNotPopulatedArray = errorIfNotPopulatedArray;
