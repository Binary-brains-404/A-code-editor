 const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", function(req,res){
    
// })

app.use('/', require('./routes/compiler'));

 app.use('/api/compiler', require('./routes/compiler'));



app.listen(port, () => {
    console.log(`server is running at ${port}`);
});