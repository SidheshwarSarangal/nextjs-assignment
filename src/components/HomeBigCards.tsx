'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import 'keen-slider/keen-slider.min.css';

const slides = [
    {
        img: '/pngegg.png',
        img2: '/upi.avif',
        heading: 'Upto 60% OFF',
        text: 'On selected cards and payment methods',
        text2: 'Enjoy upto 60% off on card payments and UPIs',
        link: '',
        button: 'Get It'
    },
    {
        img: '/coke.png',
        img2: '/coke.png',
        heading: 'Coka Cola',
        text: 'Get Free Coca Cola for orders above Rs.500',
        text2: 'Free Coca Cola is waiting for you. Excited?',
        link: '',
        button: 'Take a Sip'
    },
    {
        img: '/delivery.png',
        img2: '/deli.avif',
        heading: 'Free Delivery',
        text: 'On orders above 4 pizzas and Sundays',
        text2: 'No Delivery charges if you want to have meal for everyone near you',
        link: '',
        button: 'Order Now'
    },
    {
        img: '/pizzapng.png',
        img2: '/slice.avif',
        heading: 'FREE Pizza!',
        text: 'With 2 large pizzas, get 1 FREE',
        text2: 'Have a great meal for the whole Family and Friends',
        link: '',
        button: 'Get Me'
    },
    {
        img: '/sundaypng.png',
        img2: '/sundaypng.png',
        heading: 'Upto 40% Off',
        text: 'On all Sundays and special days',
        text2: 'You can get upto 40% off on all sundays and special days.',
        link: '',
        button: 'Find Me'
    },
];

export default function HomeBigCards() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
            spacing: 15, // optional, adds space between slides
        },
        breakpoints: {
            '(min-width: 1500px)': {
                slides: { perView: 2, spacing: 20 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(s) {
            // Add smooth transition easing (default is good, but you can customize)
            s.container.style.transitionTimingFunction = 'ease-in-out';
            s.container.style.transitionDuration = '1000ms';
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            slider.current?.next();
        }, 10000);
        return () => clearInterval(interval);
    }, [slider]);

    return (
        <div className="flex flex-col lg:flex-row w-full px-0 py-5 sm:py-10 gap-10 md:gap-4">
            {/* Left: Carousel - 3/5 for md and above, full width for small */}
            <div
                ref={sliderRef}
                className="keen-slider rounded-xl overflow-hidden min-h-[300px] h-[300px] lg:h-[350px] md:w-3/5 w-full"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex justify-center items-center h-[350px]"
                    >
                        <div className="p-1 w-full h-full rounded-xl shadow-xl overflow-hidden relative bg-neutral-800 text-white flex">

                            

                            {/* Text & Button Content Overlay */}
                            <div className="absolute w-3/4 sm:w-1/2 left-6 top-6 z-9">
                                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-yellow-400">{slide.heading}</h2>
                            </div>

                            <div className="absolute w-3/4 sm:w-1/2 left-6 bottom-32 lg:bottom-16 z-10">
                                <p className="text-md sm:text-lg md:text-xl font-bold text-white">{slide.text}</p>
                            </div>

                            <div className="absolute left-6 bottom-20 lg:bottom-4 z-10">
                                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-yellow-300 transition">
                                    {slide.button}
                                </button>
                            </div>

                            {/* Right Side Image */}
                            <div className="ml-auto w-3/5 sm:w-1/2">
                                <img
                                    src={slide.img}
                                    alt="Promo"
                                    className="absolute hidden sm:block object-left 2xl:right-[-29%] top-0 h-full object-cover"
                                />
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            {/* Right: Text Content - 2/5 for md and above, full width below md */}
            <div className="group w-full hidden lg:block lg:w-2/5  flex-col mx-auto justify-center p-6 -mt-14 rounded-xl relative overflow-hidden ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        style={{ position: 'relative' }}
                    >
                        <img
                            src={slides[currentSlide].img2}
                            alt="Promo"
                            className="w-80 group-hover:animate-shake h-80 mx-auto object-contain mb-4"
                        />

                        {/* Comic Font Text */}
                        <p
                            className="text-xl mx-auto justify-center align-middle font-semibold -mt-16 text-gray-700"
                        >
                            {slides[currentSlide].text2}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
