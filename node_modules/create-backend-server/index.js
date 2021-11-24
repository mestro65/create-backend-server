module.exports = function createServer() {
    const express = require('express')
    const port = 3000 | 3010 | 5000
    const app = express()
    const http = require('http').Server(app)

    http.listen(port, () => {
        console.log("Server works at port %d", port, "http://localhost:"+ port)
    })
}