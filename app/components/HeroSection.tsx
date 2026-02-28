"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-pink-100 flex flex-col md:flex-row items-center justify-between px-10 pt-32 overflow-hidden">

      {/* TEXT SIDE */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-rose-800 mb-6 leading-tight">
          Sweet Moments, <br />
          Beautifully Baked
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Custom cakes made with love for every celebration.
          We turn your special moments into unforgettable memories.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link href="/contact">
            <button className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition shadow-md">
              Order Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* IMAGE FLOATING SIDE (NO CARD BOX, NO GRID FEELING) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex justify-center md:justify-end w-full"
      >
        <Image
          src="/hero-cake5.png"
          alt="Beautiful Cake"
          width={450}
          height={500}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* 🌊 WAVE DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32"
          preserveAspectRatio="none"
        >
          <path
            fill="#fdf2f8"
            d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96V320H0Z"
          />
        </svg>
      </div>

    </section>
  )
}