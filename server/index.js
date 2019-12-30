var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url, true).query;
      
    
    console.log(params);
    var a = params.name;
    var b = params.email;

    var numA = String (a);
    var numB = String(b);
    var sum = String(numA+numB);

    response.write(sum);
    response.end();
    fs.writeFile('write.txt', sum, 'utf8', function(error){
        if(error) throw error;
        console.log("Запись файла завершена. Содержимое файла:");
        var data = fs.writeFileSync("write.txt")
        console.log(data);
    });

}).listen(30000);