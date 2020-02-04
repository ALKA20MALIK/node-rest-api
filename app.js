const http=require('http')
const server=http.createServer((req,res)=>{
    
    if(req==='/'){
        res.write('ASAS')
    }
})

server.listen(3300)