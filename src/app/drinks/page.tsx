
"use client";

import Image from "next/image";
import LeftSidebar from "../../components/LeftSideBar";
import { useEffect, useState } from "react";
import { Pizza, Search } from 'lucide-react';
import HomeBigCards from "../../components/HomeBigCards";
import MenuBar from "../../components/MenuBar";
import FoodCard from "../../components/FoodCard";
import { ArrowLeft } from 'lucide-react';
import { vegPizzas } from "../../components/vegpizzalist";
import { nonVegPizzas } from "../../components/nonvegpizzalist";
import { ChevronDown } from 'lucide-react';

import { drinks } from "../../components/drinklist";
import { stuff } from "../../components/stufflist";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";


const images = [
    "/drinks.jpg",
    "/drinks2.jpg",
    "/drinks3.jpg",
    "/drinks4.jpg",
    "/home7.jpg",
    "/home8.jpg",
    "/home6.jpg"
];

export default function Drinks() {
    const { data: session, status } = useSession();

    const [currentIndex, setCurrentIndex] = useState(0);

    const [focused, setFocused] = useState(false);

    const [showAllVeg, setShowAllVeg] = useState(false);
    const [showAllNonVeg, setShowAllNonVeg] = useState(false);


    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/");
        }
    }, [status]);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 9000); // 9 seconds

        return () => clearInterval(interval);
    }, []);

    if (status === "loading") {
        return (
          <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
            <div className="w-48 h-48 mb-6 animate-shake-pulse">
              <Pizza size={192} className="text-orange-500" />
    
            </div>
            <p className="text-3xl font-bold text-orange-600 typing">Loading...</p>
    
            {/* Typing animation only */}
            <style jsx>{`
              @keyframes typing {
                from { width: 0 }
                to { width: 8ch }
              }
      
              .typing {
                overflow: hidden;
                white-space: nowrap;
                border-right: 3px solid orange;
                animation: typing 2s steps(8) infinite alternate;
              }
            `}</style>
          </div>
        );
      }

    return (
        <div className="w-full cursor-default">
            <LeftSidebar />
            <div className="flex w-full flex-row h-screen">
                <div className="w-full xl:w-2/3 p-14 ">
                    <div className="w-full pl-14 sm:pl-20 pb-28 lg:pl-24">
                        <div className="flex w-full items-center flex-col md:flex-row align-top justify-left gap-8">
                            <Link href="/landing" className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition">
                                <ArrowLeft className="w-10 h-10 text-white" />
                            </Link>
                            <div
                                className={`flex items-center   border-2 lg:w-80 lg:h-14 w-48 h-10 rounded-full px-4 py-2 transition-colors duration-300
                   ${focused ? 'border-orange-500' : 'border-gray-300'}`}
                            >
                                <Search className={`w-10 h-10 mr-2 sm:w-8 sm:h-8 transition-colors duration-300 ${focused ? 'text-orange-500' : 'text-gray-500'}`} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    className="outline-none bg-transparent w-full text-xl sm:text-lg text-gray-700 placeholder-gray-400"
                                />
                            </div>
                        </div>


                        <div className="flex flex-row mt-7 align-baseline pt-12 items-center justify-left gap-2 md:gap-8 pr-6">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-orange-400 hidden md:block rounded-full"></div>
                                <div className="font-bold ml-1 text-4xl  text-orange-400">Special</div>
                            </div>

                            <button
                                onClick={() => setShowAllNonVeg(!showAllNonVeg)}
                                className="text-xl flex items-center text-orange-400 hover:text-orange-400 hover:animate-shake transition-colors duration-300"
                            >
                                {showAllNonVeg ? "Collapse" : "Expand"}
                                <ChevronDown
                                    className={`w-6 h-6 ml-2 transform transition-transform duration-300 text-orange-400 ${showAllNonVeg ? "rotate-0" : "-rotate-90"
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Always visible first 2 pizzas */}
                        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-6 max-w-4xl">
                            {stuff.slice(0, 2).map((stuffitem, index) => (
                                <FoodCard
                                    key={index}
                                    image={stuffitem.image}
                                    heading={stuffitem.heading}
                                    veg={stuffitem.veg}
                                    price={stuffitem.price}
                                    text={stuffitem.text}
                                />
                            ))}
                        </div>

                        {/* Expandable section for remaining Non-Veg pizzas */}
                        <div
                            className={`overflow-hidden transition-all pb-7 duration-700 ease-in-out ${showAllNonVeg ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-4 max-w-4xl">
                                {stuff.slice(2).map((stuffitem, index) => (
                                    <FoodCard
                                        key={index + 1000} // use a different range to avoid key clash
                                        image={stuffitem.image}
                                        heading={stuffitem.heading}
                                        veg={stuffitem.veg}
                                        price={stuffitem.price}
                                        text={stuffitem.text}
                                    />
                                ))}
                            </div>
                        </div>



                        <div className="flex flex-row mt-7 align-baseline items-center justify-left pt-8 gap-2 md:gap-8 pr-6">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 hidden md:block rounded-full"></div>
                                <div className="font-bold ml-1 text-4xl  text-red-500">Cold Drinks</div>
                            </div>

                            <button
                                onClick={() => setShowAllVeg(!showAllVeg)}
                                className="text-xl flex items-center hover:animate-shake text-red-500 hover:text-red-500 transition-colors duration-300"
                            >
                                {showAllVeg ? "Collapse" : "Expand"}
                                <ChevronDown
                                    className={`w-6 h-6 ml-2 transform transition-transform duration-300 text-red-500 ${showAllVeg ? "rotate-0" : "-rotate-90"
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Always visible first 2 pizzas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-6 max-w-4xl">
                            {drinks.slice(0, 2).map((drink, index) => (
                                <FoodCard
                                    key={index}
                                    image={drink.image}
                                    heading={drink.heading}
                                    veg={drink.veg}
                                    price={drink.price}
                                    text={drink.text}
                                />
                            ))}
                        </div>

                        {/* Expandable section for remaining pizzas */}
                        <div
                            className={`overflow-hidden transition-all mb-10 pb-6 duration-700 ease-in-out ${showAllVeg ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-4 max-w-4xl">
                                {drinks.slice(2).map((drink, index) => (
                                    <FoodCard
                                        key={index + 2}
                                        image={drink.image}
                                        heading={drink.heading}
                                        veg={drink.veg}
                                        price={drink.price}
                                        text={drink.text}
                                    />
                                ))}
                            </div>
                        </div>



                    </div>
                </div>


                <div className="fixed right-0 top-0 h-full overflow-hidden w-0 xl:w-1/3">
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Login Side ${index + 1}`}
                            width={1000}
                            height={1000}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
