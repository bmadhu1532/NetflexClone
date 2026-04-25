import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices." },
    { question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
    { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device." },
    { question: "How do I cancel?", answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees." },
    { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
    { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-10 px-6 md:px-16 lg:px-32 text-white">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="flex flex-col gap-4 max-w-8xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141] transition-colors p-6 text-left text-lg md:text-2xl font-medium"
            >
              <span>{faq.question}</span>
              <svg 
                className={`w-8 h-8 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
            
            {/* Answer Panel */}
            {openIndex === index && (
              <div className="bg-[#2d2d2d] p-6 text-lg md:text-xl mt-[2px] border-t border-black">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;