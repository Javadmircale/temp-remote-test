const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/firstText.txt", "utf8");
const second = readFileSync("./content/secondText.txt", "utf8");
writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first} , ${second}`,
  { flag: "a" }
);
console.log(first, second);
