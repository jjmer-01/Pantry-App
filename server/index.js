const express = require('express')
const addCtrl = require('./controllers/addController')
const cors = require('cors')

const app = express()
const PORT = 4020

app.use(express.json())
app.use(cors())


app.get('/api/pantry', addCtrl.displayPantryArr)
app.post('/api/pantry', addCtrl.addFoodItem)
app.put('/api/pantry/:id', addCtrl.updateFoodItem)
app.delete('/api/pantry/:id', addCtrl.deleteFoodItem)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))