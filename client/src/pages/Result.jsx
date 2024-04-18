import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import WinnerModal from '../components/WinnerModal';
import { Cities } from '../data/data';
import criminalImage from '../assets/criminal.png'
import copSearchingGif from '../assets/copSearching.gif'


const Result = () => {
    const [showWinner, setShowWinner] = useState(false)

    const location = useLocation()

    const criminalCity = location.state.criminalCity

    const criminalCityIndx = Cities.findIndex(c => c.name === criminalCity)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWinner(true)
        }, 2000)

        return () => clearTimeout(timer);
    },)



    return (
        <div className='container mt-14'>

            {!showWinner && (
                <div className='flex justify-center items-center flex-col'>
                    <h1 className="text-center text-2xl font-bold ">Searching for Criminal</h1>
                    <img src={copSearchingGif} alt="Cop searching GIF" />
                </div>
            )}


            {showWinner && <WinnerModal winner={location.state.winner[0]} criminalCity={location.state.criminalCity} />}

            {showWinner && (
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='text-center text-2xl font-bold text-green-800'>Winner is {location.state.winner[0].name}</h1>
                        <h1 className='text-center text-2xl font-bold text-green-800'>Criminal found in the city of {location.state.criminalCity}</h1>
                        <div className='flex flex-col md:flex-row justify-around gap-9'>
                            <img className='w-80 border-4 border-red-500 mb-5 md:mb-0' src={criminalImage} alt="criminal" />
                            <img className='w-80 h-60 border-4 border-red-500' src={Cities[criminalCityIndx].imageUrl} alt="city" />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Result
