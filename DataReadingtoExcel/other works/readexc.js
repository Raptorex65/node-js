const ExcelJS = require('exceljs');

var workbook = new ExcelJS.Workbook(); 
workbook.xlsx.readFile('OrnekDosya.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(Sheet1);
        worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
          console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));

        });
    });