import http from 'http';
import fs from 'fs';

http.createServer(function(req:any,res: any){
    
    if(req.url === '/api') {
        res.writeHead(200,{
            'Content-Type': 'application/json'
        });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        }
        res.end(JSON.stringify(obj));
    }
    
}).listen(1337,'127.0.0.1');