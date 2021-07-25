const htpp = require("http");

const PORT = 3000;

htpp
  .createServer((req, res) => {
    // https://localhost:300/hola
    switch (req.url) {
      case "/":
        res.write("Basic HTTP server");
        break;
      case "/hello":
        res.write("<h1>Hello World!</h1>");
        break;
      default:
        res.write("404 Not Found");
    }
    res.end();
  })
  .listen(PORT);

console.log(`Running on https://localhost:${PORT}`);
