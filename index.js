const http = require('http')
const express = require('express')

const app = express()

app.use((req, res) => {
  res.status(200).send("I'm alive!")
})

httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 8080, () => {
  console.log('server is up.')
})

module.exports = httpServer
