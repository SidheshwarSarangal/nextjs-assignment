
"use client";

import Image from "next/image";
import LeftSidebar from "../components/LeftSideBar";
import { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import HomeBigCards from "../components/HomeBigCards";



const images = [
  "/home1.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home5.jpg",
  "/home6.jpg",
  "/home7.jpg",
  "/home8.jpg"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [focused, setFocused] = useState(false);



  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <LeftSidebar />
      <div className="flex flex-row h-screen">
        <div className="w-full xl:w-4/5 p-14 ">
          <div className="w-full pl-14 sm:pl-20 lg:pl-24">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="text-xl md:text-2xl text-gray-400 font-bold">
                  Hello Pizza Lover
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl mt-4">
                  Say Cheese!!!!
                </div>
              </div>
              <div
                className={`flex items-center mt-8 border-2 lg:w-80 lg:h-14 w-48 h-10 rounded-full px-4 py-2 transition-colors duration-300
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
            <div>
              <HomeBigCards />
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden w-0 xl:w-1/5">
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
