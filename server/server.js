const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const AppRouter = require('./routes/AppRouter')

const app = express()

const PORT = process.env.PORT || 3001


app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/api', AppRouter)
app.get('/', (req, res) => {
    res.send({ msg: 'Server Running ' })
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Server running on ${PORT}`))