//In this page the user can log out. I have used proper auth clean for logging out
// The page is divided into two parts. The left for sign-in. The right for Images. The right part images are not visible for smaller displays.

"use client";

import Image from "next/image";
import LeftSidebar from "../../components/LeftSideBar";
import { useEffect, useState } from "react";
import { ArrowLeft, MapPin, Phone, LogOut, Pizza } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const images = [
    "/home1.jpg",
    "/login-side1.jpg",
    "/login-side2.jpg",
    "/pizza1.jpg",
    "/pizza2.jpg",
    "/pizza3.jpg",
    "/pizza4.jpg"
];

export default function Profile() {
    const { data: session, status } = useSession(); //for authentication

    const [currentIndex, setCurrentIndex] = useState(0); //for image changing

    //for authentication
    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/");
        }
    }, [status]);

    //for image changing
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    //for screen loading time
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
            {/* left side bar*/}
            <LeftSidebar />

            {/* Main Layout */}
            <div className="flex w-full flex-row h-screen">

                {/* Left Profile Info Section */}
                <div className="w-full ml-14 md:ml-24 xl:w-4/5 p-6 sm:p-10 md:p-14">
                    <div className="max-w-xl">
                        <div className="mb-6">
                            <Link href="/landing" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                                <ArrowLeft className="w-6 h-6 text-white" />
                            </Link>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-800 mb-8">Hi {session?.user?.name}</h1>

                        {/* Address  */}
                        <div className="mb-6">
                            <label className="flex items-center text-gray-700 text-lg font-semibold mb-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                Address
                            </label>
                            <div className="w-full px-4 py-2 my-2 rounded-lg text-gray-800 bg-white shadow">
                                <p className="text-xl font-semibold">12/22, Mukharjee Nagar, Delhi 9</p>
                            </div>
                        </div>

                        {/* Phone Number  */}
                        <div className="mb-6">
                            <label className="flex items-center text-gray-700 text-lg font-semibold mb-2">
                                <Phone className="w-5 h-5 mr-2" />
                                Phone Number
                            </label>
                            <div className="w-full px-4 py-2 my-2 rounded-lg text-gray-800 bg-white shadow">
                                <p className="text-xl font-semibold">+91-9022XXXXXX</p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg text-lg">
                            <LogOut className="w-5 h-5" />
                            Logout
                        </button>
                    </div>
                </div>


                {/* Right Side Images */}
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
