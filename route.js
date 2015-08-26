function  route(pathname, handle, request, response)
{
  if(typeof handle[pathname] === 'function')
  {
    handle[pathname](request, response);
  }
  else
  {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write("Oops!, page not found.");
    response.end();
  }

}

exports.route = route;