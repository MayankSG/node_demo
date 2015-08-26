function start(request, response)
{
  console.log("Start action called successfully!")
  response.writeHead(200, {"Content-Type": 'text/html'})
  response.write("Start action called successfully!");
  response.end();
}

exports.start = start;