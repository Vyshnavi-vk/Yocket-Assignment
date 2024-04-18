import React, { useState } from 'react';

const WinnerModal = ({ winner, criminalCity }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="z-50 bg-white p-4 sm:p-8 rounded-lg relative max-w-lg w-full mx-auto sm:max-w-md">
                        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <h1 className="text-center text-2xl font-bold text-green-800">Congrtsss!! {winner.name} found crimianal in {criminalCity}</h1>
                        <img className="w-72 md:w-80 mx-auto mt-4" src={winner.imageUrl} alt="cop" />
                    </div>
                </div>
            )}
        </>
    );
};

export default WinnerModal;
