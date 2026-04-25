import React from 'react';

const FooterHome = () => {
  return (
    <div className="bg-black pt-12 pb-20 px-6 md:px-16 lg:px-32 text-white border-b-8 border-[#232323]">
      
      {/* Secondary Email Signup Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-base md:text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="w-full max-w-3xl flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-grow h-14 px-4 bg-[#161616] border border-gray-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 transition duration-300 text-white text-xl font-bold rounded px-8 py-3 flex items-center justify-center gap-2 flex-shrink-0">
            Get Started
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" fill="white"></path></svg>
          </button>
        </form>
      </div>

      {/* Links Section */}
      <div className="max-w-5xl text-[#b3b3b3] text-sm">
        <p className="mb-6">Questions? Call <a href="tel:000-800-919-1743" className="underline hover:text-white">000-800-919-1743</a></p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col gap-3">
            <a href="#" className="underline hover:text-white">FAQ</a>
            <a href="#" className="underline hover:text-white">Investor Relations</a>
            <a href="#" className="underline hover:text-white">Privacy</a>
            <a href="#" className="underline hover:text-white">Speed Test</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="underline hover:text-white">Help Centre</a>
            <a href="#" className="underline hover:text-white">Jobs</a>
            <a href="#" className="underline hover:text-white">Cookie Preferences</a>
            <a href="#" className="underline hover:text-white">Legal Notices</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="underline hover:text-white">Account</a>
            <a href="#" className="underline hover:text-white">Ways to Watch</a>
            <a href="#" className="underline hover:text-white">Corporate Information</a>
            <a href="#" className="underline hover:text-white">Only on Netflix</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="underline hover:text-white">Media Centre</a>
            <a href="#" className="underline hover:text-white">Terms of Use</a>
            <a href="#" className="underline hover:text-white">Contact Us</a>
          </div>
        </div>

        {/* Language Selector Footer */}
        <div className="relative inline-block mb-6">
          <select className="appearance-none bg-[#161616] text-white border border-gray-600 rounded px-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer font-medium">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.92672V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.92672 7.87338C5.98666 9.28271 7.33611 10.7516 8.92294 11.7624C9.15854 11.4011 9.68072 10.8524 10.0243 10.582C8.75052 9.77334 7.6433 8.64731 6.67104 7.37563C7.54019 5.93297 8.08271 4.38202 8.35821 2.76632H9.52722C9.43121 3.51346 9.24354 4.21447 8.98801 4.84224H9.52722Z"></path></svg>
          </div>
        </div>

        <p className="text-xs">Netflix India</p>
      </div>
    </div>
  );
};

export default FooterHome;