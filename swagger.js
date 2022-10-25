const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes/document.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})