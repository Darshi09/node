const http = require('http');

const { sum, multiply, sub } = require('./arithmetic');//local module

const PORT = 8090;

const server = http.createServer((req, res) => {
    res.write(`Sum: ${sum(5, 3)} sub: ${sub(5, 3)} multiply: ${multiply(5, 3)}`);
    res.end();
});

server.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
        return;
    }
    console.log('Server is listening on port', PORT);
});