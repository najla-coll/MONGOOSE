console.clear();
const express = require('express');
const app = express();
const port = 4000;


const router = require('./router')
app.use('/', router);


const connectDB = require('./connectionDB')
connectDB();

app.listen(port,()=>{
    console.log(`app running at http://localhost:${port}`)
})