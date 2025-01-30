const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/ToDoRoute.js')

const PORT = process.env.PORT || 2122

require('dotenv').config({path:'../.env'})

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_ATLAS_URI)
    .then(console.log('MongoDB Atlas Connected...'))
    .catch(err=>console.log(err))

app.use(routes)

app.listen(PORT,()=>console.log(`Express Server Listening`))