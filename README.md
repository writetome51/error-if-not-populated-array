# errorIfNotPopulatedArray(arg): void

Function triggers error if `arg` is not an array with at least one item.

## Examples
```
errorIfNotPopulatedArray([]);
// Error: "Input must be an array that is not empty"

errorIfNotPopulatedArray(8);
// Error: "Input must be array."
```

## Installation
`npm i  error-if-not-populated-array`

## Loading
```ts
// if using TypeScript:
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
// if using ES5 JavaScript:
var errorIfNotPopulatedArray = 
    require('error-if-not-populated-array').errorIfNotPopulatedArray;
```
