//EXCELJS LIBRARY KULLANILARAK HAZIRLANMISTIR
const ExcelJS = require('exceljs');
//DATALAR DIGER MODULDEN ALINMISTIR
const dataObject = require('./data.js')
//EXCELJS ILE ONCE DOSYA OKUTULMUS SONRA DATALAR THIRDSHEET OLARAK EKLENMISTIR
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('OrnekDosya.xlsx')
.then(function() {
//Adding a worksheet
const worksheetThird = workbook.addWorksheet('ThirdSheet')
//Worksheet headers assigned using by columns
worksheetThird.columns = [{key: "ISIM", header:"ISIM"}, {key: "SOYISIM", header: "SOYISIM"}, 
{key: "YAS", header: "YAS"}, {key: "ALDIGI MAAS", header:`'ALDIGI MAAS'`}, {key: "CINSIYETI", header: "CINS"}];

//DataRow object values on the other module assigned with adding new rows

worksheetThird.addRow(dataObject.dataRow[0])
worksheetThird.addRow(dataObject.dataRow[1])
worksheetThird.addRow(dataObject.dataRow[2])
worksheetThird.addRow(dataObject.dataRow[3])
worksheetThird.addRow(dataObject.dataRow[4])
worksheetThird.addRow(dataObject.dataRow[5])
worksheetThird.addRow(dataObject.dataRow[6])

//Finally creating the combined new XLSX file
const fileName = "Sample.xlsx";
workbook.xlsx.writeFile(fileName).then(() => {
    console.log('File is written');
});

})
