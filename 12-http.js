const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("here is a short story of us");
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>looks like you are lost because there is no route as like as the one your're looking for</p>
    <a href='/'>Back to Home </a>
    `);
});

server.listen(5000);
