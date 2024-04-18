import React from 'react';
import { Cities, Vehicles } from '../data/data';
import axios from 'axios'


const SelectOptions = ({ options, cops, setCops, copIndx, cop }) => {

    const handleSelect = async (value, indx) => {

        //checks if a city is already selected by other cop or not
        if (options === Cities) {
            const isSelectedByOther = cops.some((cop, i) => indx !== i && cop.selectedCity === value)

            if (isSelectedByOther) {
                alert(`City ${value} has already been selected by other cop. Please select other city`)
            }

            const updatedCops = [...cops];
            updatedCops[copIndx].selectedCity = value
            setCops(updatedCops);
        }

        //checks if a selected vehicle is suitable or not
        else if (options === Vehicles) {
            const updatedCops = [...cops]
            updatedCops[copIndx].selectedVehicle = value
            setCops(updatedCops)

            try {
                const cityIndx = Cities.findIndex(c => c.name === cops[copIndx].selectedCity)
                const distance = Cities[cityIndx].distance
                const vehicleKind = cops[copIndx].selectedVehicle

                await axios.post('http://localhost:5000/api/cop//is-suitable-vehicle', { vehicleKind, distance })

            } catch (error) {
                if (error.response && error.response.data && error.response.data.canSelect === false) {
                    alert('Your vehicle is not suitable for the selected distance. Please select other vehicle')
                }
            }
        }

    }



    return (
        <div className='mt-5'>
            <select className="block w-80 p-2 border rounded" onChange={(e) => handleSelect(e.target.value, copIndx)}>
                <option value="" disabled selected>Choose</option>

                {options === Cities && options.map((opt, index) => (
                    <option key={index} value={opt.name} disabled={cops.some(c => c.selectedCity === opt.name)}>
                        {opt.name}
                    </option>
                ))}

                {options === Vehicles && options.map((opt, index) => (
                    <option key={index} value={opt.name}>{opt.name}</option>
                ))}

            </select>
        </div>

    );
};

export default SelectOptions;



