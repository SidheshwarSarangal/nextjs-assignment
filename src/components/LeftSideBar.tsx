import { User, Pizza, ShoppingBasket, Coffee, LogOut } from 'lucide-react';
import Link from 'next/link';



export default function LeftSidebar() {
    return (
        <aside className="group z-10 fixed h-screen bg-gray-100 shadow-md transition-all duration-300
      w-14 hover:w-44
      sm:w-20 sm:hover:w-60
      lg:w-24 lg:hover:w-72
      overflow-hidden"
        >
            <ul className="p-4 mt-28 space-y-6 sm:p-6 sm:space-y-10 lg:p-8 lg:space-y-20">
                <li>
                    <Link
                        href="/pizza"
                        className="flex items-center hover:text-orange-500 text-gray-700
              text-xl
              sm:text-2xl
              lg:text-3xl"
                    >
                        <Pizza
                            className="
                w-7 h-7 min-w-[28px]
                sm:w-8 sm:h-8 sm:min-w-[32px]
                lg:w-10 lg:h-10 lg:min-w-[40px]"
                        />
                        <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:ml-5">
                            Pizza
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/drinks"
                        className="flex items-center hover:text-orange-500 text-gray-700
              text-xl
              sm:text-2xl
              lg:text-3xl"
                    >
                        <Coffee
                            className="
                w-7 h-7 min-w-[28px]
                sm:w-8 sm:h-8 sm:min-w-[32px]
                lg:w-10 lg:h-10 lg:min-w-[40px]"
                        />
                        <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:ml-5">
                            Drinks
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/cart"
                        className="flex items-center hover:text-orange-500 text-gray-700
              text-xl
              sm:text-2xl
              lg:text-3xl"
                    >
                        <ShoppingBasket
                            className="
                w-7 h-7 min-w-[28px]
                sm:w-8 sm:h-8 sm:min-w-[32px]
                lg:w-10 lg:h-10 lg:min-w-[40px]"
                        />
                        <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:ml-5">
                            Orders
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/profile"
                        className="flex items-center hover:text-orange-500 text-gray-700
              text-xl
              sm:text-2xl
              lg:text-3xl"
                    >
                        <User
                            className="
                w-7 h-7 min-w-[28px]
                sm:w-8 sm:h-8 sm:min-w-[32px]
                lg:w-10 lg:h-10 lg:min-w-[40px]"
                        />
                        <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:ml-5">
                            Profile
                        </span>
                    </Link>
                </li>
            </ul>
            <div className="absolute bottom-80 md:bottom-24  w-full px-4 sm:px-6 lg:px-8">
                <Link
                    href="/profile"
                    className="flex items-center text-red-600 hover:text-red-800 text-xl sm:text-2xl lg:text-3xl"
                >
                    <LogOut className="w-7 h-7 min-w-[28px] sm:w-8 sm:h-8 sm:min-w-[32px] lg:w-10 lg:h-10 lg:min-w-[40px]" />
                    <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:ml-5">
                        Logout
                    </span>
                </Link>
            </div>
        </aside>
    );
}
