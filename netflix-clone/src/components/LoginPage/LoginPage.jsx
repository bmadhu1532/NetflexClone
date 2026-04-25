import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  return (
    /* Moved the gradient here so it covers the Header too */
    <div 
      className="min-h-screen text-[#E5E5E5] flex flex-col font-sans"
      style={{
        background: 'linear-gradient(to bottom, #440a0a 0%, #000000 50%)',
        backgroundColor: 'black'
      }}
    >
      
      {/* --- HEADER --- */}
      <header className="p-6 md:px-16 md:py-6 relative z-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
          className="h-7 md:h-9"
        />
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow flex justify-center pt-8 md:pt-20 px-6 relative z-10">
        
        <div className="w-full max-w-[450px] bg-black md:bg-black/75 md:p-16 md:rounded-md flex flex-col h-fit">
          <h1 className="text-3xl md:text-[32px] font-bold text-white mb-3">
            Enter your info to sign in
          </h1>
          <p className="text-[#8C8C8C] text-base mb-8">
            Or get started with a new account.
          </p>

          <form className="w-full flex flex-col gap-4">
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 px-5 pt-6 pb-2 text-white bg-[#333] rounded-md border border-[#808080] focus:outline-none focus:ring-2 focus:ring-white text-base peer"
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className="absolute left-5 top-5 text-[#8C8C8C] text-base transition-all duration-200 
                           peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                           peer-focus:top-2 peer-focus:text-xs 
                           -translate-y-0 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
              >
                Email or mobile number
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full h-14 bg-[#E50914] text-white font-bold text-base rounded-md hover:bg-[#C11119] transition duration-200"
              onClick={(e)=>e.preventDefault()}
            >
              Continue
            </button>
          </form>

          {/* --- GET HELP SECTION --- */}
          <div className="mt-6">
            <button 
              onClick={() => setShowHelp(!showHelp)}
              className="text-white hover:underline text-base flex items-center justify-center md:justify-start gap-1 w-full transition-all"
            >
              Get Help
              <svg 
                className={`w-4 h-4 mt-0.5 transition-transform duration-300 ${showHelp ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {showHelp && (
              <div className="flex flex-col gap-3 mt-4 animate-fadeIn">
                <a href="#" className="text-white hover:underline text-base block text-center md:text-left">
                  Forgot email or mobile number?
                </a>
                <a href="#" className="text-white hover:underline text-base block text-center md:text-left">
                  Learn more about sign-in
                </a>
              </div>
            )}
          </div>
          
          <p className="text-[#737373] text-[13px] leading-relaxed mt-10 text-center md:text-left">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-[#1A1A1A] text-[#8C8C8C] mt-24 py-10 px-6 md:px-16 lg:px-48 border-t border-[#333] relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6 text-base font-semibold">
            Questions? Call <a href="tel:000-800-919-1743" className="hover:underline">000-800-919-1743</a> (Toll-Free)
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-3 text-sm mb-8">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Centre</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>

          <div className="relative inline-block mt-4">
            <select className="appearance-none bg-black border border-[#333] text-white py-3 pl-10 pr-12 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8C8C8C] text-sm cursor-pointer">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A10 10 0 0012 22a10 10 0 008-4.5m-4.048-7A10 10 0 0012 2a10 10 0 00-8 4.5M9 7h1M3 21h18M12 7v5m0 0l-1.5 1.5M12 12l1.5 1.5"></path></svg>
            </div>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;