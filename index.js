const app  = require('./app')
const http = require('http').Server(app)
const port = process.env.PORT || 3333

/** Init Server */
setTimeout(() => {
    http.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}, 3000)
