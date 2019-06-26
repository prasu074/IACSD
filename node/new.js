
var http=require("http")

var product={
	title:"rose",
	desc:"valentine flower"
};

http.createServer(function(req,resp){
	resp.writeHead(200,{"Content-Type":"text/plain"});
	resp.end(JSON.stringify(product));
}).listen(7890);
console.log("server is running on port 7890");