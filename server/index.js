const connection = require("./db")
const cors = require("cors")
const express = require('express')
const app = express()

connection()

const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())







app.listen(port, () => console.log(`listening on port ${port}........`))