const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subFolder", "text.txt");
console.log(filePath);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subFolder",
  "text.txt"
);
console.log(absolutePath);
