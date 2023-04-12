// server.js

const express = require('express')
const next = require('next')

const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

// Your app will get the Azure port from the process.enc.PORT
const port = process.env.PORT || 3001;

app
  .prepare()
  .then(() => {
     const server = express()

     server.get('*', (req, res) => {
         return handle(req, res)
     })

     server.listen(port, err => {
        if (err) throw err
            console.log('> Ready on http://localhost:3001')
        })
     })
     .catch(ex => {
         console.error(ex.stack)
         process.exit(1)
     })