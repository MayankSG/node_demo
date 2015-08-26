var http = require('http'),
    url = require('url');

function start(route, handler)
{
  function onRequest(req, res){

    pathname = url.parse(req.url).pathname;

    route(pathname, handler, req, res);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("server created successfully!")
}


exports.start = start