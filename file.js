let express = require('express');
let app = express();
let router = require('./router/main') (app);

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000")
});
app.use(express.static('public'));
