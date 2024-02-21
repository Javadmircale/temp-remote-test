const _ = require("lodash");

const items = [1, [2, 3, 4, [5, 7, 9, [12, 12, [21]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
