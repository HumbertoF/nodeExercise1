
const http = require('http');

let quoteList = require('./quotes');

let randomValue = () => {
   
    return quoteList[Math.floor(Math.random() * quoteList.length)]; 
}

http.createServer(function(request, response) {
   
    response.writeHead(200, {'Content-type': "text/html"});
    let body = `
      <div style=" color: #000; padding: 25px; margin: 0 auto; max-width: 1000px; font-size: 60px;">
        <p>"${randomValue()}"</p>
       </div>`;
     response.write((body));
 
    response.end();
}).listen(3000);

console.log('http://locahost:');