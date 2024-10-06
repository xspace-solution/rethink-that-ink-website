"use client";

import { useState } from 'react';

const testimonials = [
  {
    quote: "The book value of my car was way higher than what I paid, probably because it had some issues. I didn’t want to get taxed on a price that wasn’t fair. Apex Auto Appraisals looked at the real condition of my car and gave me a proper value. I ended up paying way less in taxes. The whole process was easy and stress-free.",
    name: "Jessica M.",
    img: "https://framerusercontent.com/images/kzhshaFtHzVaopz5hPGdpaHKiIs.png", // Replace with actual image path
  },
  {
    quote: "I was kinda worried about getting an appraisal done, but Apex made it super simple. They took their time and explained everything to me. I ended up saving a bunch on taxes, and it wasn’t stressful like I thought it’d be.",
    name: "Karen L.",
    img: "https://framerusercontent.com/images/kzhshaFtHzVaopz5hPGdpaHKiIs.png", // Replace with actual image path
  },
  {
    quote: "I needed to get an appraisal to avoid paying a ton of taxes on my car that had problems. Apex Auto Appraisals gave me a detailed report with what my car was actually worth. They were fast and saved me some good money. Would definitely use them again.",
    name: "Mike R.",
    img: "https://framerusercontent.com/images/kzhshaFtHzVaopz5hPGdpaHKiIs.png", // Replace with actual image path
  },
  // Add more testimonials as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">What Our Clients Say About Us</h2>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevSlide} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
          ❮
        </button>
        <div className="flex-1 mx-4">
          <div className="text-center">
            <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p className="italic">"{testimonials[currentIndex].quote}"</p>
            <p className="font-semibold mt-2">— {testimonials[currentIndex].name}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
          ❯
        </button>
      </div>
      <div className="flex justify-center">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;