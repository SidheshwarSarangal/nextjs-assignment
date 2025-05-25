import { User, Pizza, ShoppingBasket, Coffee } from 'lucide-react';
import Link from 'next/link';



export default function LeftSidebar() {
    return (
        <aside className="group z-10 fixed h-screen bg-gray-100 shadow-md transition-all duration-300
      w-14 hover:w-44
      sm:w-20 sm:hover:w-60
      lg:w-24 lg:hover:w-72
      overflow-hidden"
        >
            <ul className="p-4 mt-52 space-y-6 sm:p-6 sm:space-y-10 lg:p-8 lg:space-y-20">
                <li>
                    <Link
                        href="/dashboard"
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
                        href="/dashboard/analytics"
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
                        href="/dashboard/cart"
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
                            Cart
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/profile"
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
        </aside>
    );
}
