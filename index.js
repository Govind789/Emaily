const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('{hi: "govind"}');
});

const PORT = process.env.PORT || 5000;
app.listen(5000);