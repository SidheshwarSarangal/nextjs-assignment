'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import 'keen-slider/keen-slider.min.css';

const slides = [
    {
        img: '/home1.jpg',
        heading: 'Slide 1',
        text: 'Mountains at dawn',
        text2: 'Experience the serene beauty of morning mountains.',
    },
    {
        img: '/home2.jpg',
        heading: 'Slide 2',
        text: 'Tranquil lake view',
        text2: 'Calm reflections across a peaceful lake.',
    },
    {
        img: '/home3.jpg',
        heading: 'Slide 3',
        text: 'Snowy peaks',
        text2: 'Majestic snowy mountains touching the skies.',
    },
    {
        img: '/home4.jpg',
        heading: 'Slide 4',
        text: 'Golden hour valley',
        text2: 'A valley painted with warm hues at sunset.',
    },
    {
        img: '/home5.jpg',
        heading: 'Slide 5',
        text: 'Evening serenity',
        text2: 'Quiet landscapes to end the day peacefully.',
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
        <div className="flex flex-col lg:flex-row w-full px-0 py-10 gap-10 md:gap-4">
            {/* Left: Carousel - 3/5 for md and above, full width for small */}
            <div
                ref={sliderRef}
                className="keen-slider rounded-xl overflow-hidden min-h-[350px] h-[350px] md:w-3/5 w-full"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex justify-center items-center h-[350px]"
                    >
                        <div className="w-full h-full rounded-xl shadow-xl overflow-hidden text-white relative bg-neutral-800 flex">
                            {/* Left Content */}
                            <div className="w-1/2 p-6 flex flex-col justify-end z-10 ">
                                <h2 className="text-3xl font-bold">{slide.heading}</h2>
                                <p className="text-lg mt-2">{slide.text}</p>
                            </div>

                            {/* Right Image (cropped on the right side) */}
                            <div className="gap-x-5 w-1/2 ">
                                <img
                                    src="/pizzapng.png"
                                    alt="Pizza"
                                    className="absolute right-[-40%] top-0 h-full object-cover"
                                />
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            {/* Right: Text Content - 2/5 for md and above, full width below md */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center p-6 rounded-xl relative overflow-hidden ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        style={{ position: 'relative' }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            {slides[currentSlide].heading}
                        </h3>
                        <p className="text-lg text-gray-700">{slides[currentSlide].text2}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
