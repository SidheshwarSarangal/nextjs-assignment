'use client';

import Image from 'next/image';

interface FoodCardProps {
    image: string;
    heading: string;
    veg: boolean;
    price: number | string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, heading, veg, price }) => {
    return (
        <div className="group w-full p-1 max-w-md h-40 flex bg-white rounded-2xl shadow-lg overflow-hidden ">
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
            <div className="w-1/2 p-4 relative flex flex-col justify-between">
                <div>
                    <h2 className="text-md sm:text-xl font-bold text-gray-800">{heading}</h2>
                    <div className="flex md:hidden lg:flex items-center mt-0 space-x-2">
                        <div className="flex items-center  space-x-2">
                            <Image
                                src={veg ? '/veg.png' : '/nonveg.png'}
                                alt={veg ? 'Veg' : 'Non-Veg'}
                                width={24}
                                height={24}
                            />

                        </div>
                        <span className="text-sm sm:text-lg text-gray-600">
                            {veg ? 'Veg' : 'Non-Veg'}
                        </span>
                    </div>

                </div>
                <div className='absolute bottom-4'>
                    <p className="text-xl sm:text-4xl  xl:text-3xl  font-bold text-gray-700">₹{price}</p>
                </div>
                <div className=" absolute hidden lg:block right-2 bottom-4 justify-between items-end">
                    <button className="w-7 h-7 2xl:w-14 2xl:h-14 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-xl 2xl:text-4xl shadow-md transition-all duration-300 ease-in-out">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
