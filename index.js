require('http')
    .Server((req, res) => {
      const CORS1 = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain; charset=UTF-8'
      };
      res.writeHead(200, CORS1);
      if (req.url === '/login/') return res.end('davlet');
      if (req.url === '/login') return res.end('davlet');
      if (req.url === '/sample/') return res.end('\nfunction task(x) {\n  return x * this ** 2;\n}');
      if (req.url === '/sample') return res.end('\nfunction task(x) {\n  return x * this ** 2;\n}');
// if (req.url === '/promise/') return res.end('\nfunction task(x) {\n  return x * this ** 2;\n}');
      if (req.url === '/promise/') return res.end('function task(x){ return new Promise(function(resolve, reject) { if (x < 18) {resolve("yes")} else {reject("no")}});}');
      if (req.url === '/promise') return res.end('function task(x){ return new Promise(function(resolve, reject) { if (x < 18) {resolve("yes")} else {reject("no")}});}');

      if (req.url === '/fetch/' || req.url === '/fetch') {

        const CORS2 = {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/html; charset=UTF-8'
        };
        res.writeHead(200, CORS2);
        return res.end(`<input type="text" id="inp"><button id="bt" onclick="fetch(document.getElementById('inp').value).then(response1 => response1.text()).then(response2 => document.getElementById('inp').value = response2)">submit</button>`);
      }

      res.end('test');
    })
.listen(process.env.PORT);
