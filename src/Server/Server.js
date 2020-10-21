const express = require('express');
const app = express();
require('dotenv').config();

/* 환경 변수 */
const port = process.env.SERVER_PORT


/* Router */
const api = require('./router/index');

app.use('/api',api);


app.listen(port,() => {
    console.log(`Server is Running at ${port}`)
})