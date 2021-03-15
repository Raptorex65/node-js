const fs = require('fs');
/*
//DOSYA OLUSTURMAK ICIN..BURADA DENEME.TXT DOSYASI OLUSTURUP ICINE HELLO WORLD YAZDIK
fs.writeFile('OrnekDosya.txt', 'Hello World...', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('dosya oluşturuldu');
    }
})
*/

//DOSYA ICERIGINI KONSOLDA GOSTERMEK ICIN
const data = fs.readFile('OrnekDosya.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});


