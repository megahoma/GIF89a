const express = require('express')
const app = express()

app.get('/:file', function(req, res) {
  res.sendfile(req.params.file, {
    headers: {
      'Content-Type': 'text/javascript',
    },
  });
});

app.listen(3000);
