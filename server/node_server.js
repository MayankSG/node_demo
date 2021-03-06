var http = require('http'),
    url = require('url');

function start(route, handle)
{
  function onRequest(req, res){

    var pathname = url.parse(req.url).pathname;
    var postData = "";

    req.setEncoding("utf8");

    req.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    req.addListener("end", function() {
      route(handle, pathname, res, postData);
    })
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("server created successfully!")
}


exports.start = start