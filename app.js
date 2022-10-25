const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const i18n = require('i18n')
const mongoose = require('mongoose')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerFile = require('./swagger.json')
const router = require('./src/routes/index')

require('./src/models')
require('dotenv').config({})

i18n.configure({
    locales: ['en', 'pt-BR'],
    directory: __dirname + '/assets/i18n',
    defaultLocale: 'pt-BR',
    cookie: 'i18n'
});

let MONGO_URI = process.env.MONGO_URI

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {
    connectTimeoutMS: 600000,
})
mongoose.connection
    .once('open', function () {
        console.log('MongoDB database connection established successfully')
    })

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser('platformneoway'))
app.use(i18n.init)

app.use(router)
// app.use('/api/log', statusRoutes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app
