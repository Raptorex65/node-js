// EventEmitter bir class object, onun icin bas harf buyuk
const EventEmitter = require('events');
// EventEmitter classindan bir emitter object turettik
const emitter = new EventEmitter();

//listener kayit et
emitter.on('connection', function(args){
    console.log('Baglanti kuruldu', args);
});

//event'i yani connection'i tetikledik ve id/message olarak iki parametre gonderdik, args bunlari aliyor
emitter.emit('connection', {id: 1, message:'hello'});