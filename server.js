
require('dotenv').config;
const express = require('express');
const path = require('path');
const router = require('./src/routes/router');

const PORT = process.dotenv.PORT || 3000;


const server = express();


server
    .use(express.static(path.resolve(__dirname, 'public', scripts)))
    .use(express.urlencoded({ extended: true }))
    .set('views', path.resolve(__dirname, 'src', 'views'))
    .set('view engine', 'ejs')
    .use(router)
    .listen(PORT, console.log(`Project is running at: http://localhost:${PORT}`))