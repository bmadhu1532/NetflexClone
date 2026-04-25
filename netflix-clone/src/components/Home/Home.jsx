import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    // Replaced body tag with a div, converted classes to className, and added inline style for the font
    <div 
      className="bg-black text-white h-screen relative selection:bg-red-600 selection:text-white overflow-hidden"
      style={{ fontFamily: "'Martel Sans', sans-serif" }}
    >
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header / Navbar */}
        <header className="flex justify-between items-center px-3 py-6 md:px-32 md:py-6 w-full max-w-7xl mx-auto">
          <div className="text-red-600 font-black text-3xl md:text-5xl tracking-wide uppercase">
            Netflix
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-black/40 text-white border border-gray-500 rounded px-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent cursor-pointer font-medium">
                <option>English</option>
                <option>हिन्दी</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-1 text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Converted fill-rule and clip-rule to camelCase */}
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.92672V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.92672 7.87338C5.98666 9.28271 7.33611 10.7516 8.92294 11.7624C9.15854 11.4011 9.68072 10.8524 10.0243 10.582C8.75052 9.77334 7.6433 8.64731 6.67104 7.37563C7.54019 5.93297 8.08271 4.38202 8.35821 2.76632H9.52722C9.43121 3.51346 9.24354 4.21447 8.98801 4.84224H9.52722Z" fill="white"></path>
                </svg>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-1 text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="white"></path>
                </svg>
              </div>
            </div>
                      <Link 
            to="/login" 
            className="bg-[#E50914] py-2 px-4 rounded text-white font-bold"
          >
            Sign In
          </Link>
          </div>
        </header>

        {/* Main Hero Content */}
        <main className="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-black text-white leading-tight mb-4 max-w-4xl tracking-tight">
            Unlimited movies, shows, and more
          </h1>
          <p className="text-lg md:text-2xl font-medium text-white mb-6">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="text-base md:text-xl text-white mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <form className="w-full max-w-3xl flex flex-col sm:flex-row gap-2 md:gap-3 mt-2">
            <div className="relative flex-grow">
              {/* Closed the input tag properly for JSX */}
              <input type="email" id="email" placeholder="Email address" className="w-full h-12 md:h-14 px-4 pt-2 bg-black/50 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white peer" required />
            </div>
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition duration-300 text-white text-xl md:text-2xl font-bold rounded px-6 py-3 md:py-0 md:px-8 flex items-center justify-center gap-2 flex-shrink-0">
              Get Started
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" fill="white"></path>
              </svg>
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Home;