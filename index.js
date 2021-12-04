const express = require('express');
const data = require('./data');
const port = 5000;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/data', async (req,res)=>{
    res.status(200).json({data})
})
app.get('/', (req,res) => {
    res.send('hello world')
});

app.listen(port,async ()=>{
    console.log('listening on port 5000');
})