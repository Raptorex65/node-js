const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

// server.on('request', (req, res)=> {}) BU KISMI createserverla birlestirip kisalttik   

    //res.setHeader('Content-Type', 'text/plain'); 
    // res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 200;
    //res.statusMessage = 'Ok';

    // res.write(JSON.stringify({ name: 'Samsung S67', price: 3254}));

  /*
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from Nodejs Server</h1></body>')
    res.write('</html>')
*/
    // res.write('Hello Peoples')
    //res.end();

    


    fs.readFile('index.html', function (error, file) {

        if (error) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('Dosya bulunamadı.');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'Ok';
            res.end(file);
        }
    });




});



server.listen(5500);

console.log('Listening port on 5500...');