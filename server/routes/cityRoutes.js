const router = require('express').Router()
const { getCriminalCity, addCity, getAllCities, updateCity, deleteCity } = require('../controllers/cityControllers')


//find criminal city 
router.get('/get-city', getCriminalCity)


//crud operations for cities
router.post('/add-city', addCity)
router.put('/update-city', updateCity)
router.get('/get-cities', getAllCities)
router.delete('/delete-city', deleteCity)

module.exports = router