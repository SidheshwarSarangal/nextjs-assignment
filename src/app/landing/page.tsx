"use client";

import Image from "next/image";
import LeftSidebar from "../../components/LeftSideBar";
import { useEffect, useState } from "react";
import { Search, Pizza } from 'lucide-react';
import HomeBigCards from "../../components/HomeBigCards";
import MenuBar from "../../components/MenuBar";
import FoodCard from "../../components/FoodCard";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

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

export default function LandingPage() {
  const { data: session, status } = useSession();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [focused, setFocused] = useState(false);


  // Redirect after render to avoid hook violation
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

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
      <div className="flex flex-row h-screen">
        <div className="w-full xl:w-4/5 p-14">
          <div className="w-full pl-14 sm:pl-20 lg:pl-24">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="text-xl md:text-2xl text-gray-400 font-bold">
                  Hi {session?.user?.name || "Guest"}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl mt-4">
                  Say Cheese!!!!
                </div>
              </div>
              <div
                className={`flex items-center mt-5 md:mt-8 border-2 lg:w-80 lg:h-14 w-48 h-10 rounded-full px-4 py-2 transition-colors duration-300
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

            <div><HomeBigCards /></div>
            <div><MenuBar /></div>

            <div className="flex flex-row mt-7 align-baseline">
              <Image src="/rank.svg" alt="Best" height={50} width={50} />
              <div className="font-bold ml-1 text-4xl pt-3 text-orange-400">
                Bestseller
              </div>
            </div>

            <div className="flex gap-10 flex-col md:flex-row mt-5 pb-16">
              <FoodCard
                image="/Farmhouse.jpg"
                heading="Gourmet"
                veg={true}
                price={180}
                text="Try our special Gourmet Pizza. With the enriching flavours from Italy, it fills you with joy. It consists of Cheese, Olives and Capsicum"
              />
              <FoodCard
                image="/BBQ.jpg"
                heading="Pepper Barbeque"
                veg={false}
                price={220}
                text="Try out special Chicken Pepper Barbeque Pizza. It gives you a Pepper taste with smoky flavour. It consists of Cheese and Grilled Chicken pieces"
              />
            </div>
          </div>
        </div>

        <div className="fixed right-0 top-0 h-full overflow-hidden w-0 xl:w-1/5">
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
