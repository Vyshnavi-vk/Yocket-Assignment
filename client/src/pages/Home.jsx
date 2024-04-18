import React, { useState } from 'react'
import cop1 from '../assets/cop1.png'
import cop2 from '../assets/cop2.png'
import cop3 from '../assets/cop3.png'
import SelectOptions from '../components/SelectOptions'
import { Vehicles, Cities } from '../data/data'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate()
    const [cops, setCops] = useState([
        { name: 'Cop 1', selectedCity: '', selectedVehicle: '', imageUrl: cop1 },
        { name: 'Cop 2', selectedCity: '', selectedVehicle: '', imageUrl: cop2 },
        { name: 'Cop 3', selectedCity: '', selectedVehicle: '', imageUrl: cop3 },
    ])


    const handleSubmit = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/city/get-city')
            const criminalCity = data.city
            const winner = cops.filter((cop) => cop.selectedCity === criminalCity)

            if (winner.length === 0 || !winner) {
                alert('Criminal not found in the selected Cities')
                return;
            }
            if (winner.length === 1) {
                navigate('/winner', { state: { winner, criminalCity } });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center text-bold  mt-10 text-lg'>
                <p className='md:text-2xl'>Hello cops, Please select the city and vehicle</p>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className='flex flex-col md:flex-row justify-around gap-8 overflow-x-auto'>

                    {cops.map((cop, indx) => {
                        return (
                            <div key={indx} >
                                <img src={cop.imageUrl} alt={cop.name} className='w-80 h-auto mx-2 mb-4 md:mb-0' />
                                <p className='mt-2'>Please select City</p>
                                <SelectOptions options={Cities} cops={cops} setCops={setCops} copIndx={indx} cop={cop} />
                                <p className='mt-5'>Please select Vehicle</p>
                                <SelectOptions options={Vehicles} cops={cops} setCops={setCops} copIndx={indx} cop={cop} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='flex justify-center align-center mt-6'>
                <button type="submit"
                    onClick={handleSubmit}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Search
                </button>
            </div>
        </>
    )
}

export default Home
