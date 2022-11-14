const http = require('http')

// Create a server with the HTTP variable
const server = http.createServer(function(req, res){
    //Headers
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send back some information

    // res.end("Welcome to Zuri")

    // res.end(`
    // {
    //     "name": "Ebuka",
    //     "College": "Unilag",
    //     "Occupation": "Software Developer
    // }
    // `)
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Testing</title>
        <style>
        body{
            background-color: yellow;
            font-size: 32px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    </style>
    </head>
    <body  style="text-align: center;">
        <h1>Hey!!You are welcome</h1>
        <p>What is your name?</p>
        <h4>Love it!</h4>
    </body>
    </html>
    `)
});


server.listen(2000)

console.log("Yes, you have created a server");