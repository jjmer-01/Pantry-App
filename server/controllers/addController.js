const axios = require('axios')

const foodArr = [
    {
        id: 1,
        foodName: 'Pinto Beans',
        foodPercentage: 80
    },
    {
        id: 2,
        foodName: 'Brown Rice',
        foodPercentage: 30
    },
    {
        id: 3,
        foodName: 'Chickpeas',
        foodPercentage: 50
    },
    {
        id: 4,
        foodName: 'Lentils',
        foodPercentage: 100
    }
]

let id = 5

module.exports = {
    displayPantryArr: (req, res) => {
        res.status(200).send(foodArr)
    },

    addFoodItem: (req, res) => {
        const { foodName, foodPercentage } = req.body

        const newFood = {
            id: id,
            foodName: foodName,
            foodPercentage: foodPercentage,
        }
        id++
        foodArr.push(newFood)
        res.status(200).send(foodArr)
    },

    updateFoodItem: (req, res) => {
        const { id } = req.params
        const { foodName, foodPercentage } =  req.body
        const index = foodArr.findIndex(element => {
            return element.id === +id
        })

        foodArr[index] = {
            foodName: foodName,
            foodPercentage: foodPercentage
        }

        axios.put()
            .then()

        res.status(200).send(foodArr)

    },

    deleteFoodItem: (req, res) => {
        const { id } = req.params

        const index = foodArr.findIndex(element => {
            return element.id === +id
        })

        foodArr.splice(index, 1)

        res.status(200).send(foodArr)
    }

}