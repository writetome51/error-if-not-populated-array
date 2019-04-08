var errorIfNotPopulatedArray = require("./index").errorIfNotPopulatedArray;

errorIfNotPopulatedArray([0]);

errorIfNotPopulatedArray(8);
errorIfNotPopulatedArray('');
errorIfNotPopulatedArray({});
errorIfNotPopulatedArray([]);

