const http=require('http')
const server=http.createServer((req,res)=>{
    
    if(req==='/'){
        res.write('ALka test')
    }
})

server.listen(3300)
