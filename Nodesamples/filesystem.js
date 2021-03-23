const fs = require("fs");
/*
const files = fs.readdir('./', function(error, data){
if (error){
    console.log(error);
} else {
    console.log(data);
}
});
*/
const data = fs.readFile('deneme.html', 'utf8', function(error, data){
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
    });
    