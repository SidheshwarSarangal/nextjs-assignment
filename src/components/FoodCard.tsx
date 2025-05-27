'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FoodCardProps {
    image: string;
    heading: string;
    veg: boolean;
    price: number;
    text: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, heading, veg, price, text }) => {
    const [selectedBase, setSelectedBase] = useState('Simple');
    const [selectedSize, setSelectedSize] = useState('Regular');
    const [showModal, setShowModal] = useState(false);

    const getUpdatedPrice = () => {
        let basePrice = typeof price === 'number' ? price : parseFloat(price);



        if (basePrice > 120) {
            // Size adjustments
            if (selectedSize === 'Medium') basePrice += 100;
            else if (selectedSize === 'Large') basePrice += 200;

            // Base type adjustments
            if (selectedBase === 'Cheese Burst') basePrice += 70;
            else if (selectedBase === 'Thin Crust') basePrice -= 30;
        }

        return basePrice;
    };


    return (
        <>
            {/* Card */}
            <div
                onClick={() => setShowModal(true)}
                className="group w-full p-1 max-w-md h-40 flex bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
                {/* Left Image */}
                <div className="w-1/2 relative group-hover:animate-shake">
                    <Image
                        src={image}
                        alt={heading}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-1/2 p-4 relative  flex flex-col justify-between">
                    <div>
                        <h2 className="text-md sm:text-xl font-bold text-gray-800">{heading}</h2>
                        <div className="flex md:hidden lg:flex items-center mt-0 space-x-2">
                            <Image
                                src={veg ? '/veg.png' : '/nonveg.png'}
                                alt={veg ? 'Veg' : 'Non-Veg'}
                                width={24}
                                height={24}
                            />
                            <span className="text-sm sm:text-lg text-gray-600">
                                {veg ? 'Veg' : 'Non-Veg'}
                            </span>
                        </div>
                    </div>
                    <div className='absolute bottom-4'>
                        <p className="text-xl sm:text-4xl xl:text-3xl font-bold text-gray-700">₹{price}</p>
                    </div>
                    <div className="absolute hidden lg:block right-2 bottom-4">
                        <button className="w-7 h-7 2xl:w-14 2xl:h-14 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-xl 2xl:text-4xl shadow-md transition-all duration-300 ease-in-out">
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full md:w-4/5 xl:w-3/5 mx-4 rounded-lg shadow-lg relative p-6">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-4 text-4xl text-gray-500 hover:text-black"
                        >
                            &times;
                        </button>

                        {/* Top Section: Image + Heading + Veg */}
                        <div className="w-full px-6 md:px-14 mb-6 flex justify-center">
                            <div className="flex flex-col sm:flex-row items-center gap-0 md:gap-14">
                                <div className="relative w-60 h-60 flex-shrink-0">
                                    <Image src={image} alt={heading} fill className="object-cover rounded-lg" />
                                </div>
                                <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start mt-4 md:mt-0">
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">{heading}</h2>
                                    <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                                        <Image
                                            src={veg ? '/veg.png' : '/nonveg.png'}
                                            alt={veg ? 'Veg' : 'Non-Veg'}
                                            width={40}
                                            height={40}
                                        />
                                        <span className="text-xl text-gray-600">{veg ? 'Veg' : 'Non-Veg'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Centered Text */}
                        <div className="mb-6">
                            <p className="text-gray-700 text-sm sm:text-xl font-bold text-center">{text}</p>
                        </div>

                        {/* Conditional Options */}
                        {price > 120 && (
                            <>
                                {/* Base Type Options */}
                                <div className="mb-4 text-md md:text-xl mx-6 mt-1 sm:mt-6">
                                    <h3 className="font-semibold mb-4 text-gray-700">Base Type</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Simple', 'Cheese Burst', 'Thin Crust', 'Fresh Pan'].map((base) => (
                                            <button
                                                key={base}
                                                onClick={() => setSelectedBase(base)}
                                                className={`px-3 py-1 rounded-full border ${selectedBase === base
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-white text-gray-700'
                                                    }`}
                                            >
                                                {base}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Size Options */}
                                <div className="mb-4 text-md md:text-xl mx-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Size</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Regular', 'Medium', 'Large'].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-3 py-1 rounded-full border ${selectedSize === size
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-white text-gray-700'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Bottom Row: Price + Add to Cart */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-0 sm:mt-6">
                            <p className="text-3xl sm:text-4xl font-bold text-gray-800">₹{getUpdatedPrice()}</p>
                            <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-lg sm:text-2xl font-semibold rounded-md shadow-md transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </>
    );
};

export default FoodCard;
