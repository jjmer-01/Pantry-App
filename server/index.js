require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const checkUser = require('./middleware/checkUser')
const authCtrl = require('./controllers/authController')
const foodCtrl = require('./controllers/foodController')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const cors = require('cors')
const app = express()
app.use(express.json())

app.use(cors())

app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('DATABASE CONNECTED FOR FUN AND FOR SCIENCE')
    app.listen(SERVER_PORT, () => console.log(`SERVER IS CRUSHING IT ON ${SERVER_PORT}`))
})

// app.use(cors())

//ENDPOINTS (AUTH)
app.post('/api/register', checkUser, authCtrl.register)
// app.post('/api/login', authCtrl.login)
// app.post('/api/logout', authCtrl.logout)
app.get('/api/check', checkUser)

//ENDPOINTS (FOOD ITEMS)
app.get('/api/pantry', foodCtrl.displayPantryArr)
app.post('/api/pantry', foodCtrl.addFoodItem)
app.put('/api/pantry/:id', foodCtrl.updateFoodItem)
app.delete('/api/pantry/:id', foodCtrl.deleteFoodItem)
