
"use client";

import { FaHeart, FaGift, FaClipboardList } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pink-100 px-6 md:px-20 py-28 space-y-24">

      {/* PAGE TITLE */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-5xl font-serif text-rose-800">
          About Jerry's Sweet
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Jerry's Sweet is dedicated to creating beautiful and delicious custom cakes
          for every special occasion. Our goal is to bring happiness to celebrations
          by combining creativity, quality ingredients, and professional cake design.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white p-10 rounded-3xl shadow-lg space-y-5 text-center hover:shadow-2xl transition">
          <FaHeart className="text-rose-400 text-5xl mx-auto" />

          <h3 className="text-2xl font-serif text-rose-800">
            Our Mission
          </h3>

          <p className="text-gray-600 text-justify">
            To provide high-quality custom cakes that make celebrations memorable
            by combining creativity, taste, and customer satisfaction.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-lg space-y-5 text-center hover:shadow-2xl transition">
          <FaGift className="text-rose-400 text-5xl mx-auto" />

          <h3 className="text-2xl font-serif text-rose-800">
            Our Vision
          </h3>

          <p className="text-gray-600 text-justify">
            To become a trusted online bakery platform known for delivering
            beautiful and delicious custom cake designs for all occasions.
          </p>
        </div>

      </section>

      {/* ORDER PROCESS SECTION */}
      <section className="text-center space-y-12">

        <h2 className="text-4xl font-serif text-rose-800">
          How To Order Your Cake
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <FaClipboardList className="text-rose-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-serif text-rose-800 mb-3">Choose Design</h3>
            <p className="text-gray-600 text-justify">
              Browse our gallery and select your preferred cake design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <FaClipboardList className="text-rose-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-serif text-rose-800 mb-3">Fill Order Form</h3>
            <p className="text-gray-600 text-justify">
              Provide your contact information and cake customization details.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">
            <FaGift className="text-rose-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-serif text-rose-800 mb-3">Receive Your Cake</h3>
            <p className="text-gray-600 text-justify">
              Wait for confirmation and enjoy your beautifully crafted cake.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}