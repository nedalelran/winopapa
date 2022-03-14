//require = import
const http =require('http');

//req, res sind Objekte
const server = http.createServer((req,res) => {

if (req.url == "/home") {
  res.statusCode = 200;  
  res.write("welcome to my hoome");

}
if(req.url == "/about"){
  res.statusCode = 200;  
  res.write("about");

} else {

  res.statusCode = 404;  
  res.write("not found");

}

res.end(); // abschliessen

});

//listener() bekommz callback fkt
server.listen(3000,() => {console.log("ther server is running...") });