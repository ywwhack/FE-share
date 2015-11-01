var http = require('http');
var app = http.createServer();

app.on('request', function(req, res) {
  res.end('hello world');
  //res.end(JSON.stringify({name: 'zank'}));
});

app.listen(8080, function() {
  console.log('listening on port 8080');
});

$.post(url, function() {
  $.post(url1, function(){
    $.post(url2, function() {

    });
  });
});

$http.get()
  .then(function(){}, function() {})

$.post(url)
  .sucess(function(data) {
    return $.post(url2)
  })
  .success(function(data) {

  });