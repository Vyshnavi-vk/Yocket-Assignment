const Cities = require('../data/Cities')
const fs = require('fs')


//get the criminal city randomly
const getCriminalCity = (req, res) => {
    try {

        const criminalCity = Cities[Math.floor(Math.random() * Cities.length)]

        return res.status(200).json({ city: criminalCity.name })
    }

    catch (error) {

        console.log(error)

        res.status(500).json(error)
    }
}


//adding new city to list of cities
const addCity = async (req, res) => {
    try {
        const { name, distance } = req.body

        if (!name || !distance) {
            res.json('Please give both name and distance')
        }
        else {
            Cities.push({ name, distance })

            const updatedCitiesArray = Cities

            const updatedCities = JSON.stringify(updatedCitiesArray, null, 2)

            fs.writeFileSync(
                'server/data/Cities.js',
                `module.exports = ${updatedCities}`,
                'utf-8'
            )

            res.status(200).json({ msg: 'city added successfully' })

        }


    } catch (error) {
        console.log(error)
        res.status(500).json('Internal Server Error')
    }
}


//updating existing city
const updateCity = async (req, res) => {
    try {
        const { oldName, newName, distance } = req.body

        const cityIndx = Cities.findIndex(c => c.name === oldName)

        if (cityIndx === -1) {
            return res.json({ msg: 'City not found' })
        }

        if (oldName) Cities[cityIndx].name = newName
        if (distance) Cities[cityIndx].distance = distance

        const updatedCitiesArray = Cities

        const updatedCities = JSON.stringify(updatedCitiesArray, null, 2)

        fs.writeFileSync(
            'server/data/Cities.js',
            `module.exports = ${updatedCities}`,
            'utf-8'
        )

        res.status(200).json({ msg: 'city updated successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}


//delete existing city
const deleteCity = async (req, res) => {
    try {
        const { name } = req.body

        const cityIndx = Cities.findIndex(c => c.name === name)

        if (cityIndx === -1) {
            return res.status(400).json({ msg: "City not found" })
        }

        Cities.splice(cityIndx, 1)

        const updatedCitiesArray = Cities

        const updatedCities = JSON.stringify(updatedCitiesArray, null, 2)

        fs.writeFileSync(
            'server/data/Cities.js',
            `module.exports = ${updatedCities}`,
            'utf-8'
        )

        res.status(200).json({ msg: 'city deleted successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal server error" })
    }
}


//get all cities
const getAllCities = async (req, res) => {
    try {
        const cities = Cities
        return res.status(200).json({ cities: Cities })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Internal Server Error" })
    }
}


module.exports = { getCriminalCity, addCity, getAllCities, updateCity, deleteCity }