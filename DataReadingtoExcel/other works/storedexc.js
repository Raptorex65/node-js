const ExcelJS = require('exceljs');
const dataObject = require('./data.js')

const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('OrnekDosya.xlsx')

.then(function() {
    const worksheetThird = workbook.addWorksheet('ThirdSheet')

//Header must be in below format
worksheetThird.columns = [{key:"name", header:"name"}, {key: "age", header: "age"}];

//Data must be look like below, key of data must be match to header.
var data = [{name:"Kalai", age: 24}, {name:"Vignesh", age:24}];

//adding each in sheet
for(i in data){
    worksheetThird.addRow(data[i]);
}

//Finally creating XLSX file
var fileName = "Sample.xlsx";
workbook.xlsx.writeFile(fileName).then(() => {
    console.log('File is written');
});

})
