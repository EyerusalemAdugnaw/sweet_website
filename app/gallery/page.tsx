"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/wedding1.jpg", category: "wedding", title: "Wedding Cake 1" },
  { src: "/wedding5.jpg", category: "wedding", title: "Wedding Cake 2" },
  { src: "/birthday1.jpg", category: "birthday", title: "Birthday Cake 1" },
  { src: "/birthday5.jpg", category: "birthday", title: "Birthday Cake 2" },
  { src: "/graduation1.jpg", category: "graduation", title: "Graduation Cake 1" },
  { src: "/custom1.jpg", category: "custom", title: "Custom Cake 1" },
  { src: "/wedding3.jpg", category: "wedding", title: "Wedding Cake 3" },
  { src: "/wedding4.jpg", category: "wedding", title: "Wedding Cake 4" },
  { src: "/birthday3.jpg", category: "birthday", title: "Birthday Cake 3" },
  { src: "/birthday4.jpg", category: "birthday", title: "Birthday Cake 4" },
  { src: "/graduation2.jpg", category: "graduation", title: "Graduation Cake 2" },
  { src: "/custom2.jpg", category: "custom", title: "Custom Cake 2" },
  { src: "/wedding6.jpg", category: "wedding", title: "Wedding Cake 5" },
  { src: "/wedding7.jpg", category: "wedding", title: "Wedding Cake 6" },
  { src: "/graduation9.jpg", category: "graduation", title: "Graduation Cake 3" },
  { src: "/graduation10.jpg", category: "graduation", title: "Graduation Cake 4" },
  { src: "/graduation3.jpg", category: "graduation", title: "Graduation Cake 5" },
  { src: "/custom1.jpg", category: "custom", title: "Custom Cake 3" },
  { src: "/graduation4.jpg", category: "graduation", title: "Graduation Cake 6" },
  { src: "/wedding10.jpg", category: "Wedding", title: "Wedding Cake 7" },
  { src: "/wedding9.jpg", category: "wedding", title: "Wedding Cake 8" },
  { src: "/graduation6.jpg", category: "graduation", title: "Graduation Cake 7" },
  { src: "/graduation7.jpg", category: "graduation", title: "Graduation Cake 8" },
  { src: "/birthday8.jpg", category: "birthday", title: "Birthday Cake 5" },
  { src: "/birthday9.jpg", category: "birthday", title: "Birthday Cake 6" },
  { src: "/graduation8.jpg", category: "graduation", title: "Graduation Cake 9" },
  { src: "/custom6.jpg", category: "custom", title: "Custom Cake 4" },
  { src: "/custom3.jpg", category: "custom", title: "Custom Cake 5" },
  { src: "/custom4.jpg", category: "custom", title: "Custom Cake 6" },
  { src: "/custom5.jpg", category: "custom", title: "Custom Cake 7" },
];

export default function GalleryPage() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = images.filter(img =>
    selectedCategory === "all" ? true : img.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-pink-100 px-6 md:px-20 py-28">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-rose-800 mb-4">
          Our Sweet Gallery
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our delicious creations and order your dream cake.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-4 justify-center mb-12 flex-wrap">
        {["all", "wedding", "birthday", "graduation", "custom"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-rose-400 text-white"
                : "bg-white text-gray-700 shadow-md hover:bg-rose-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">

        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white flex flex-col"
          >

            {/* IMAGE */}
            <div className="relative w-full h-40 md:h-56">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* TITLE + BUTTON */}
            <div className="p-3 flex flex-col gap-2 flex-1">

              <h3 className="text-gray-800 font-semibold text-sm md:text-base">
                {img.title}
              </h3>

              <Link
                href={`/contact?image=${encodeURIComponent(img.src)}`}
                className="text-center bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-full transition text-sm"
              >
                Order Now
              </Link>

            </div>
          </div>
        ))}

      </div>

    </main>
  );
}