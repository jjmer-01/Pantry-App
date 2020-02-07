const axios = require('axios')

const foodArr = [
    {
        foodName: 'Pinto Beans',
        foodPercentage: 80
    },
    {
        foodName: 'Brown Rice',
        foodPercentage: 30
    },
    {
        foodName: 'Chickpeas',
        foodPercentage: 50
    },
    {
        foodName: 'Lentils',
        foodPercentage: 100
    }
]

let id = 0

module.exports = {
    displayPantryArr: (req, res) => {
        res.status(200).send(foodArr)
    },

    addFoodItem: (req, res) => {},

    updateFoodItem: (req, res) => {},

    deleteFoodItem: (req, res) => {}

}