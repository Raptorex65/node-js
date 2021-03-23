const fs = require('fs');
/* 
//DIZIINDEKI DOSYALARI LISTELEMEK ICIN
const files = fs.readdir('./', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
*/ 
/*
//DOSYA ICERIGINI KONSOLDA GOSTERMEK ICIN
const data = fs.readFile('index.html', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
*/


//DOSYA OLUSTURMAK ICIN..BURADA DENEME.TXT DOSYASI OLUSTURUP ICINE HELLO WORLD YAZDIK
fs.writeFile('deneme.txt', 'Hello World...', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('dosya oluşturuldu');
    }
})

/*
//OLUSTURULMUS BIR DOSYAYA ICERIK EKLEMEK ICIN APPENDFILE KULLANIYORUZ
fs.appendFile('deneme1.txt', 'Hello World...', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('dosya oluşturuldu');
    }
})
*/

/*
// VAROLAN DOSYAYI SILMEK ICIN
fs.unlink('deneme1.txt', function (error) {
    console.log('dosya silindi.')
});
*/
/*
//YENIDEN ADLANDIRMAK ICIN
fs.rename('deneme.txt', 'deneme1.txt', function (error) {
    console.log('dosya ismi değiştirildi.');
})

*/
