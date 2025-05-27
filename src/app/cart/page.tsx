//Divided into two parts.
//The left part shows table of orders
//The right part shhows payemnt and bill
//It is responsive. THe table is visible good in smaller displays as well
//The page also contains sort funtionality based on date/time and filter based on status.

"use client";


import Image from "next/image";
import { ArrowLeft, ArrowUp, ArrowDown, Trash2, Pizza } from 'lucide-react';
import LeftSidebar from "../../components/LeftSideBar";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Session } from "inspector/promises";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function CartPage() {
    const { data: session, status } = useSession(); //for authentication

    //table data
    const [cartItems, setCartItems] = useState([
        {
            id: 24,
            name: "Deluxe Pizza",
            desc: "Extra cheese and topping",
            price: 681,
            quantity: 1,
            image: "/pizza1.jpg",
            status: "received",
            date: "2025-05-27 13:20"

        },
        {
            id: 32,
            name: "Veggie Supreme",
            desc: "Loaded with veggies",
            price: 543,
            quantity: 1,
            image: "/pizza1.jpg",
            status: "dispatched",
            date: "2025-05-27 13:25"

        },
        {
            id: 43,
            name: "Paneer Feast",
            desc: "Spicy paneer with sauces",
            price: 444,
            quantity: 1,
            image: "/pizza1.jpg",
            status: "baked",
            date: "2025-05-27 13:30"
        }
    ]);

    //for seach and filter of table data 
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [filterStatus, setFilterStatus] = useState<string>("all");

    //funtionality providing for searcg and filter
    const displayedItems = useMemo(() => {
        let items = [...cartItems];
        if (filterStatus !== "all") {
            items = items.filter(item => item.status === filterStatus);
        }
        items.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        });
        return items;
    }, [cartItems, filterStatus, sortOrder]);


    //for authentication
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
        <div className="flex cursor-default">
            {/* Sticky Left Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-24 z-50 ">
                <LeftSidebar />
            </div>

            {/* Main Content */}
            <div className="ml-14 pt-8 md:pt-14 z-9 md:ml-24 relative w-full pl-8 px-0 xl:px-16 md:p-8 flex flex-col lg:flex-row gap-12 min-h-screen ">

                {/* Cart Section */}
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* sort and filter drop down */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div>
                                <label htmlFor="sortOrder" className="block mb-1 font-semibold text-gray-700">Sort by Date</label>
                                <select
                                    id="sortOrder"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                                    className="border rounded-md p-2"
                                >
                                    <option value="asc">Oldest First</option>
                                    <option value="desc">Newest First</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="filterStatus" className="block mb-1 font-semibold text-gray-700">Filter by Status</label>
                                <select
                                    id="filterStatus"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="border rounded-md p-2"
                                >
                                    <option value="all">All</option>
                                    <option value="dispatched">Dispatched</option>
                                    <option value="baked">Baked</option>
                                    <option value="received">Received</option>
                                </select>
                            </div>
                        </div>

                        {/* table starts here */}
                        <div className="overflow-x-auto rounded-2xl shadow-lg">
                            <table className="min-w-full bg-white text-center text-sm md:text-base">
                                <thead className="bg-orange-100 text-gray-700 font-bold">
                                    <tr>
                                        <th className="px-1 md:px-4 py-4">Order ID</th>
                                        <th className="px-1 md:px-4 py-4">Pizza</th>
                                        <th className="px-1 md:px-4 py-4">Qty</th>
                                        <th className="px-1 md:px-4 py-4">Order Date</th>
                                        <th className="px-1 md:px-4 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedItems.map((item) => (
                                        <tr key={item.id} className="border-b hover:bg-orange-50 transition">
                                            <td className="px-0 md:px-4 py-4 font-semibold">{item.id}</td>
                                            <td className="px-0 md:px-4 py-4 flex justify-center items-center gap-2 font-bold">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={36}
                                                    height={36}
                                                    className="rounded-md hidden md:block"
                                                />
                                                <span>{item.name}</span>
                                            </td>
                                            <td className="px-0 md:px-4 py-4">
                                                <div className="flex flex-col items-center rounded px-2 py-1 mx-auto">
                                                    <button onClick={() => increaseQty(item.id)}>
                                                        <ArrowUp className="w-4 h-4 text-gray-600 hover:text-black" />
                                                    </button>
                                                    <span className="font-semibold">{item.quantity}</span>
                                                    <button onClick={() => decreaseQty(item.id)}>
                                                        <ArrowDown className="w-4 h-4 text-gray-600 hover:text-black" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-0 md:px-4 py-4 text-gray-600">{item.date}</td>
                                            <td className="px-0 md:px-4 py-4">
                                                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full
                                                ${item.status === "received"
                                                        ? "bg-green-100 text-green-700"
                                                        : item.status === "baked"
                                                            ? "bg-red-100 text-red-700"
                                                            : item.status === "dispatched"
                                                                ? "bg-blue-100 text-blue-700"
                                                                : "bg-gray-100 text-gray-700"}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Final Bill (Right - 40%) */}
                <div className="w-full lg:absolute top-28 right-8 lg:w-2/5 bg-gradient-to-b mb-20 from-orange-400 to-yellow-300 text-white rounded-2xl p-6 mr-2 shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-5xl font-bold">Final Bill</h2>
                    </div>

                    {/* Dummy Offers */}
                    <div className="flex gap-2 mb-6">
                        <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-md md:text-xl font-semibold">
                            10% OFF
                        </span>
                        <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-md md:text-xl font-semibold">
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
