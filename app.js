var http = require('http');

var server = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200, {'Content-type': 'text/html'});
    respuesta.write('<h3> Servidor con Node.JS </h3>');
    console.log('peticion web');
    respuesta.end();
});

server.listen(3000);
console.log('Ejecuntando un servidor web local con NODE.JS');