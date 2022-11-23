let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send(`${process.env.TEST_ENV||"No ENV"}: Hello wrld!`);
});

app.listen(3000);