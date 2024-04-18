const router = require('express')()
const { isSuitableVehicle } = require('../controllers/copControllers')

//is suitable vehicle route
router.post('/is-suitable-vehicle', isSuitableVehicle)

module.exports = router