"use client";

import Image from "next/image";
import LeftSidebar from "../../components/LeftSideBar";
import { useEffect, useState } from "react";
import { ArrowLeft, MapPin, Phone, LogOut } from "lucide-react";
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
    const { data: session, status } = useSession();



    const [currentIndex, setCurrentIndex] = useState(0);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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

    return (
        <div className="w-full cursor-default">
            <LeftSidebar />

            {/* Main Layout */}
            <div className="flex w-full flex-row h-screen">
                {/* Left Profile Info Section */}
                <div className="w-full ml-14 md:ml-24 xl:w-4/5 p-6 sm:p-10 md:p-14">
                    <div className="max-w-xl">
                        {/* Back Arrow */}
                        <div className="mb-6">
                            <Link href="/landing" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                                <ArrowLeft className="w-6 h-6 text-white" />
                            </Link>
                        </div>

                        {/* Hi Name */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">Hi Name</h1>

                        {/* Address Input */}
                        <div className="mb-6">
                            <label className="flex items-center text-gray-700 text-lg font-semibold mb-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div className="mb-6">
                            <label className="flex items-center text-gray-700 text-lg font-semibold mb-2">
                                <Phone className="w-5 h-5 mr-2" />
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
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

                {/* Right Side Rotating Images */}
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
