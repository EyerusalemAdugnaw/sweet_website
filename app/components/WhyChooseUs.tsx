"use client";

import { CakeSlice, Sparkles, Truck, Heart } from "lucide-react";

export default function WhyChooseUs() {

  const features = [
    {
      icon: <CakeSlice size={28} />,
      title: "Fresh Ingredients Daily",
      desc: "We use only premium fresh ingredients for the best taste.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Professional Cake Designers",
      desc: "Expert designers crafting beautiful custom cakes.",
    },
    {
      icon: <Truck size={28} />,
      title: "On-Time Delivery",
      desc: "Your cake arrives fresh and exactly when needed.",
    },
    {
      icon: <Heart size={28} />,
      title: "Custom Designs Available",
      desc: "We create cakes tailored to your dream design.",
    },
  ];

  return (
    <section className="py-24 bg-pink-50">

      {/* TITLE */}
      <h2 className="text-4xl text-center font-serif text-rose-800 mb-16">
        Why Choose Our Bakery?
      </h2>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer text-center flex flex-col h-full"
          >

            {/* ICON */}
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto flex items-center justify-center rounded-full bg-rose-100 text-rose-500 mb-4 md:mb-6">
              {item.icon}
            </div>

            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 text-xs md:text-sm flex-grow">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}