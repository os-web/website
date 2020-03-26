var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    var params = url.parse(request.url, true).query;
    console.log(params);
    var a = params.Name;
    response.write('finish');
    response.end();
    fs.writeFile('write.txt', a, function(err){
        if(err) throw error;
        console.log('Запись файла завершена.');
    });
}).listen(30000);

