"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 bg-pink-50 px-6 md:px-12">

      {/* SINGLE CONTAINER BOX */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row w-full shadow-xl rounded-3xl overflow-hidden border border-pink-100"
      >

        {/* IMAGE LEFT 40% */}
        <div className="md:w-[40%] w-full h-[450px]">
          <Image
            src="/about.jpg"
            alt="About Jerry's Sweet Haven"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT RIGHT 60% */}
        <div className="md:w-[60%] w-full bg-white flex flex-col justify-center p-12">

          {/* OUR STORY TITLE CENTER */}
          <h3 className="text-3xl font-serif text-rose-800 text-center mb-8">
            Our Story
          </h3>

          {/* PARAGRAPH JUSTIFY */}
          <p className="text-gray-600 text-base leading-relaxed text-justify mb-10">
            Welcome to Jerry’s Sweet Haven! We are passionate about baking
            beautiful and delicious cakes that make your special moments
            unforgettable. Every cake is crafted with love, quality ingredients,
            and creative design to bring happiness to your celebrations.
          </p>

          {/* BUTTON LEFT ALIGNED */}
          <div className="text-left">
            <Link href="/about">
              <button className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition shadow-md">
                About Us
              </button>
            </Link>
          </div>

        </div>

      </motion.div>
    </section>
  )
}