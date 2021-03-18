const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(new Date().toString(), req.method, req.headers.host, req.url);
    if(req.url === './DataReadingtoExcel'){
        // read from a file from Exceljs-data Module
        fs.readFile('Sample.xlsx')
        res.end();
        }
    });

server.listen(3001);

console.log('Listening port on 3001')



//const Excel = require('./node_modules/excel');

//const dataExcel = require('./data.js')



/*

});

*/




//const worksheetCurrent = workbook.getWorksheet('My Sheet');


//workbook.creator = 'Me';
//workbook.modified = new Date();
