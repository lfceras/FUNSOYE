const express = require('express')
const morgan = require('morgan')
require('./connection')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/createPayment')


// midlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())
app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use('/', routes)

module.exports = app



