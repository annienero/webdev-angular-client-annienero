const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/webdev-angular-client-annienero'));

app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname, 'dist/webdev-angular-client-annienero/index.html'));
});

app.listen(process.env.PORT || 4200);