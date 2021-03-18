const http = require('http');
const ExcelJS = require('exceljs');
const fs = require('fs');

//DOSYA ICERIGINI BROWSER EKRANINDA CAGIRMAK ICIN
const server = http.createServer((req, res) => {

fs.readFile('Sample.xlsx', function (error, file) {

    if (error) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end('Dosya bulunamadı.');
    } else {
        res.setHeader('Content-Type', 'xlsx');
        res.statusCode = 200;
        res.statusMessage = 'Ok';
        res.end(file);
    }
});

});

server.listen(3001);
console.log('Listening port on 3001')

/*
//DOSYA ICERIGINI KONSOLDA GOSTERMEK ICIN
const data = fs.readFile('Sample.xlsx', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

*/