const http = require('http')
const server = http.createServer((req,res) => {
    console.log('request made')
    if (req.url == '/'){
        res.end('Welcome to our home page')
    }
   if (req.url == '/about'){
        res.end('Our history page')
    }
    res.end(`
    <h1>We don't have that here</h1>
    <p>check back later</p>
    <a href="/">back home</a>
    `)
})

server.listen(3000);

