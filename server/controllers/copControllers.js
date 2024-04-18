const Vehicles = require('../data/Vehicles');
const fs = require('fs')


//checks wheteher vehicle selected by cop is suitable or not
const isSuitableVehicle = async (req, res) => {
    const { vehicleKind, distance } = req.body

    const vehicle = Vehicles.find((v) => v.kind === vehicleKind)

    if (vehicle.count > 0 && vehicle.range >= distance * 2) {

        const vehicleIndx = Vehicles.findIndex(v => v.kind === vehicleKind)

        if (vehicleIndx !== -1) {
            Vehicles[vehicleIndx].count--;
        }

        const updatedVehicles = Vehicles

        const updatedData = JSON.stringify(updatedVehicles, null, 2)

        fs.writeFileSync(
            'server/data/Vehicles.js',
            `module.exports = ${updatedData}`,
            'utf-8'
        )

        res.json({ vehicle: Vehicles, canSelect: true })

    }
    else {
        res.status(400).json({ canSelect: false })
    }
}

module.exports = { isSuitableVehicle }