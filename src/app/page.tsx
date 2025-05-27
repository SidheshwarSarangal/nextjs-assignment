// This is the signin page. The user can signin here using Google account. The rest all aspects are dummy
// The page is divided into two parts. The left for sign-in. The right for Images. The right part images are not visible for smaller displays.

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const images = [
  "/login-side1.jpg",
  "/login-side2.jpg",
  "/login-side3.jpg",
  "/login-side4.jpg",
  "/login-side5.jpg"
];

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0); //for image changes
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); //show password 
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false); //rememeber me tick icon

  //google authentication Login
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/landing" });
  };

  //Image changing
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // 9 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex cursor-default flex-row h-screen">

      {/* Left Side */}
      <div className=" w-full lg:w-2/3 xl:w-1/2 h-full p-8">
        <div className="mx-auto w-full sm:w-5/6 md:w-2/3">
          <div className="w-full flex items-center mt-28 justify-center text-5xl md:text-7xl mx-auto align-middle font-[var(--font-merriweather)]">Say Cheese!!!!</div>
          <div className="w-full flex items-center mt-6 justify-center text-xl md:text-3xl text-gray-700">Hello! Wanna try our delicious pizzas?</div>

          {/* Form filling starts from here*/}
          <div className="w-full flex flex-col gap-2 md:gap-3 mt-7 md:mt-12">
            <label className="text-xl md:text-2xl">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mx-3 border text-xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
            />
          </div>

          <div className="w-full flex flex-col gap-2 md:gap-3 mt-5 md:mt-8">
            <label className="text-xl md:text-2xl">Password</label>
            <div className="relative ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  px-4 py-2 mx-3 border text-xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 "
              />

              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute -right-6 mr-8 top-1/2 transform -translate-y-1/2 text-lg text-gray-600 hover:text-orange-500 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
          </div>


          <div className="w-full flex justify-between items-center ml-1 mt-8 px-3 pr-0">
            <label className="flex items-center gap-2 ml-1 text-sm md:text-lg cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-orange-500 w-5 h-5"
              />
              <div className="hover:text-orange-500">
                Remember Me
              </div>
            </label>

            <div>
              <a href="#" className=" hover:text-orange-500 mr-1 text-sm md:text-lg">
                Forgot Password?
              </a>
            </div>
          </div>


          {/* Sign In Button*/}
          <div className="mt-3">
            <button
              type="submit"
              className="w-full px-4 py-3 mx-3 bg-orange-500 text-white text-lg md:text-xl font-semibold  rounded-md hover:bg-orange-700 transition duration-200"
            >
              Sign In
            </button>
          </div>

          {/*Google Sign In Button*/}
          <div
            role="button"
            tabIndex={0}
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 mx-3 mt-5 flex cursor-pointer select-none items-center justify-center gap-3 rounded-md border border-gray-300 bg-white text-lg md:text-xl font-semibold text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            {/* Google Icon (SVG) */}
            <svg
              className="h-9 w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fill="#FFC107"
                d="M43.611 20.083h-1.27v-.003H24v7.833h11.451c-1.267 3.767-5.114 6.459-11.451 6.459-6.915 0-12.5-5.585-12.5-12.5s5.585-12.5 12.5-12.5c3.523 0 6.637 1.497 8.85 3.905l5.066-5.066C34.538 7.093 29.615 5 24 5 12.954 5 4 13.954 4 25s8.954 20 20 20c11.07 0 19.447-7.757 19.447-18.675 0-1.258-.142-2.483-.253-3.242z"
              />
              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.822A11.958 11.958 0 0 1 24 13c3.553 0 6.67 1.348 8.84 3.533l5.065-5.066C34.51 7.094 29.615 5 24 5c-7.44 0-13.77 4.496-17.694 10.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 43c5.303 0 9.787-1.936 13.042-5.077l-6.19-5.286c-1.855 1.254-4.24 2.02-6.852 2.02-5.349 0-9.88-3.61-11.49-8.454l-6.63 5.11C8.885 39.556 15.995 43 24 43z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H43.6v-.003H24v7.833h11.451c-.88 2.615-3.18 4.796-6.451 5.68v4.218l6.19 5.286C39.21 39.838 44 32.44 44 25c0-1.258-.142-2.483-.253-3.242z"
              />
            </svg>
            <div>Sign in with Google</div>
          </div>

          {/*Create Account Link*/}
          <div className="mt-5 text-center text-sm md:text-lg text-gray-700">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-orange-500 hover:text-orange-600 cursor-pointer"
            >
              Create account
            </a>
          </div>


        </div>
      </div>

      {/* Right Side (Image Slider) */}
      <div className="relative h-full overflow-hidden lg:block hidden lg:w-1/3 xl:w-1/2 w-0">
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
  );
}
