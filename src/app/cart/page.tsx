"use client";


import Image from "next/image";
import { ArrowLeft, ArrowUp, ArrowDown, Trash2 } from 'lucide-react';
import LeftSidebar from "../../components/LeftSideBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Session } from "inspector/promises";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function CartPage() {
    const { data: session, status } = useSession();

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Deluxe Pizza",
            desc: "Extra cheese and topping",
            price: 681,
            quantity: 1,
            image: "/pizza1.jpg"
        },
        {
            id: 2,
            name: "Veggie Supreme",
            desc: "Loaded with veggies",
            price: 543,
            quantity: 1,
            image: "/pizza1.jpg"
        },
        {
            id: 3,
            name: "Paneer Feast",
            desc: "Spicy paneer with sauces",
            price: 444,
            quantity: 1,
            image: "/pizza1.jpg"
        }
    ]);

    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/");
        }
    }, [status]);

    const increaseQty = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    return (
        <div className="flex cursor-default">
            {/* Sticky Left Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-24 z-50 ">
                <LeftSidebar />
            </div>

            {/* Main Content */}
            <div className="ml-14 pt-8 md:pt-14 z-9 md:ml-24 relative w-full px-4 md:px-16 md:p-8 flex flex-col lg:flex-row gap-12 min-h-screen ">

                {/* Cart Section (Left - 60%) */}
                <div className="w-full pr-[5%] lg:w-3/5 space-y-6">
                    {/* Back Arrow */}
                    <Link href="/landing" className="w-12 h-12 mb-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </Link>

                    {/* Cart Heading */}
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-1">Shopping cart</h3>


                        {/* Orders summary above cart items */}
                        <div className="mb-6">
                            <h4 className="text-2xl p-2 md:py-4 font-bold text-gray-700 mb-4">
                                You have {cartItems.length} orders
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-green-100 px-4 py-3 rounded-xl shadow-sm">
                                    <div className="space-y-1">
                                        <p className="text-xl font-semibold text-gray-700">Order No.1425</p>
                                        <p className="text-xl font-bold text-gray-700">{session?.user?.name}</p>
                                        <p className="text-xl text-gray-600">Date: May 27th, 2025</p>
                                        <p className="text-xl text-green-700 font-bold">Status: Order Received</p>
                                        {/*<p className="text-xl text-red-500 font-bold">Status: Baking</p>*/}
                                        {/*<p className="text-xl text-yellow-600 font-bold">Status: Dispatched</p>*/}
                                        {/*<p className="text-xl text-black font-bold">Status: Dispatched</p>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cart Items */}
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 bg-white shadow-lg rounded-2xl mb-4 hover:shadow-xl transition"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={71}
                                        height={72}
                                        className="rounded-xl"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-xl md:text-3xl">{item.name}</h4>
                                        <p className="text-sm md:text-xl text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    <div className="flex flex-col items-center border rounded px-2 py-1 bg-gray-100">
                                        <button onClick={() => increaseQty(item.id)}>
                                            <ArrowUp className="w-5 h-5 text-gray-600 hover:text-black" />
                                        </button>
                                        <span className="font-semibold text-lg">{item.quantity}</span>
                                        <button onClick={() => decreaseQty(item.id)}>
                                            <ArrowDown className="w-5 h-5 text-gray-600 hover:text-black" />
                                        </button>
                                    </div>
                                    <span className="font-semibold text-lg md:text-2xl text-gray-700">Rs.{item.price * item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Bill (Right - 40%) */}
                <div className="w-full lg:absolute top-28 right-8 lg:w-2/5 bg-gradient-to-b from-orange-400 to-yellow-300 text-white rounded-2xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-5xl font-bold">Final Bill</h2>
                    </div>

                    {/* Offers */}
                    <div className="flex gap-2 mb-6">
                        <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-xl font-semibold">
                            10% OFF
                        </span>
                        <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-xl font-semibold">
                            Free Delivery
                        </span>
                    </div>

                    {/* Name & Address */}
                    <div className="space-y-4 mb-6">
                        <div className="w-full px-4 py-2 rounded-lg text-gray-800 bg-white shadow">
                            <p className="text-xl font-semibold">{session?.user?.name}</p>
                        </div>
                        <div className="w-full px-4 py-2 rounded-lg text-gray-800 bg-white shadow">
                            <p className="text-xl font-semibold">12/22, Mukharjee Nagar, Delhi 9</p>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="text-white text-2xl font-extrabold space-y-2 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>
                                Rs.{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span>Rs.40</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total (Tax incl.)</span>
                            <span>
                                Rs.{cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 40}
                            </span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-white text-orange-600 font-semibold py-3 rounded-xl text-2xl shadow-lg transition-all duration-300 ease-in-out hover:bg-yellow-100">
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}
