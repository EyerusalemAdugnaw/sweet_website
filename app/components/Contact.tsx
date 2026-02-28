"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative py-28 bg-pink-50 overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-400 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-rose-800 mb-6"
        >
          Let’s Create Something Sweet Together 
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-600 text-lg mb-10"
        >
          Whether it’s a wedding, birthday, or special celebration,
          we’d love to bring your dream cake to life.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/contact">
            <button className="bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition shadow-lg hover:shadow-2xl">
              Contact Us
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}