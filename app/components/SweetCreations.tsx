"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cakes = [
  {
    title: "Wedding Cake",
    desc: "Elegant custom wedding cake designs.",
    image: "/wedding1.jpg",
  },
  {
    title: "Graduation Cake",
    desc: "Celebrate your achievement with sweet style.",
    image: "/graduation1.jpg",
  },
  {
    title: "Birthday Cake",
    desc: "Perfect cakes for birthday celebrations.",
    image: "/birthday1.jpg",
  },
  {
    title: "Custom Cake",
    desc: "Design your dream cake with us.",
    image: "/custom2.jpg",
  },
];

export default function SweetCreations() {
  return (
    <section className="bg-pink-50 py-24 text-center px-6 md:px-8">

      <h2 className="text-4xl font-serif text-rose-800 mb-14">
        Our Sweet Creations
      </h2>

      {/* GRID CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

        {cakes.map((cake, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col h-full"
          >

            {/* IMAGE */}
            <Image
              src={cake.image}
              alt={cake.title}
              width={400}
              height={300}
              className="w-full h-36 md:h-52 object-cover"
            />

            {/* CONTENT */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                {cake.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm flex-grow">
                {cake.desc}
              </p>

              <Link href="/gallery">
                <button className="mt-4 w-full bg-rose-400 text-white py-2 rounded-full hover:bg-rose-500 transition text-sm md:text-base">
                  View More
                </button>
              </Link>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}