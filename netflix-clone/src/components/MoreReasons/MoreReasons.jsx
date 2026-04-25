import React from 'react';

const MoreReasons = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      icon: <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    }
  ];

  return (
    <div className="bg-black py-10 px-6 md:px-16 lg:px-32 text-white">
      <h2 className="text-2xl font-bold mb-6">More reasons to join</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {reasons.map((item, index) => (
          <div key={index} className="relative bg-gradient-to-br from-[#192237] to-[#25102a] p-6 rounded-xl min-h-[260px] flex flex-col transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-12">{item.desc}</p>
            <div className="absolute bottom-6 right-6">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreReasons;