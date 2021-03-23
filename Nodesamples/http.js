const http = require('http');
const server = http.createServer((req,res) => {
console.log(req.url, req.method)
});

//server.on('connection', function(){
//    console.log('new connection established..')
//})
 /*   
    (req,res) =>{
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/products'){
        res.write('product list');
        res.end();
    }
});

*/
server.listen(3000);
console.log('Listening port on 3000')

/*example
server.on('connection', function(){
    console.log('new connection established')
}
*/
