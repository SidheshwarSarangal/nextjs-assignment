'use client';

import Image from 'next/image';
import Link from 'next/link';

const MenuBar = () => {
  return (
    <div className="w-full flex flex-wrap mx-auto md:mx-0 items-center justify-start px-4 py-0 bg-white text-2xl lg:text-4xl">
      <h1 className="font-bold text-gray-800 mb-4 text-4xl mr-10 lg:mb-0">Menu</h1>
      
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 items-center justify-start">
        <Link href="/pizza" className="group min-w-[120px] l flex items-center space-x-2 bg-gray-200 hover:bg-yellow-200 text-black px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-sm">
          <Image src="/pizza-svg.svg" alt="Pizza" width={40} height={40} className="group-hover:animate-shake" />
          <span className="text-base sm:text-lg md:text-xl">Pizza</span>
        </Link>
        
        <Link href="drinks" className="group min-w-[120px] flex items-center space-x-2 bg-gray-200 hover:bg-yellow-200 text-black px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-sm">
          <Image src="/drink.svg" alt="Drinks" width={35} height={35} className="group-hover:animate-shake" />
          <span className="text-base sm:text-lg md:text-xl">Drinks</span>
        </Link>
        
        <Link href="/cart" className="group min-w-[120px] flex items-center space-x-2 bg-gray-200 hover:bg-yellow-200 text-black px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-sm">
          <Image src="/cart.svg" alt="Cart" width={35} height={35} className="group-hover:animate-shake" />
          <span className="text-base sm:text-lg md:text-xl">Orders</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
