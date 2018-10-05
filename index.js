"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");


function errorIfNotPopulatedArray(array) {
	errorIfNotArray_1.errorIfNotArray(array);
	if (isEmpty_notEmpty_1.isEmpty(array)) {
		throw new Error('Input must be an array that is not empty.');
	}
}

exports.errorIfNotPopulatedArray = errorIfNotPopulatedArray;
