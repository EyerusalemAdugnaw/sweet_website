"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCamera,
  FaInstagram
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactPage({
  searchParams,
}: {
  searchParams: { image?: string };
}) {

  const selectedImage = searchParams?.image ?? null;

  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cakeType, setCakeType] = useState("");
  const [cakeSize, setCakeSize] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setPreview(selectedImage);
    }
  }, [selectedImage]);

  const uploadUrl = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cake_upload");

    const res = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !phone ||
      !email ||
      !cakeType ||
      !cakeSize ||
      !deliveryType ||
      !date
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      } else if (preview) {
        imageUrl = preview;
      }

      await addDoc(collection(db, "orders"), {
        name,
        phone,
        email,
        cakeType,
        cakeSize,
        deliveryType,
        date,
        message,
        imageUrl,
        status: "pending",
        createdAt: new Date(),
      });

      setShowSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setCakeType("");
      setCakeSize("");
      setDeliveryType("");
      setDate("");
      setMessage("");
      setPreview(null);
      setImageFile(null);

    } catch {
      alert("Order submission failed");
    }
  };

  return (
    <main className="min-h-screen bg-pink-100 px-6 md:px-20 py-28 relative">
      
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-rose-800 mb-4">
          Order Your Dream Cake
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill the form below to order your custom cake.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* FORM */}
        <div className="bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-3xl font-serif text-rose-800 text-center mb-8">
            Order Form
          </h2>

          <form className="space-y-5" onSubmit={handleOrderSubmit}>

            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-rose-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 pl-12 border rounded-xl"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />

            <select
              value={cakeType}
              onChange={(e) => setCakeType(e.target.value)}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Cake Type</option>
              <option>Wedding Cake</option>
              <option>Birthday Cake</option>
              <option>Graduation Cake</option>
              <option>Custom Cake</option>
            </select>

            <select
              value={cakeSize}
              onChange={(e) => setCakeSize(e.target.value)}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Cake Size</option>
              <option>1 kg</option>
              <option>2 kg</option>
              <option>3 kg</option>
              <option>5 kg</option>
            </select>

            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Delivery Method</option>
              <option value="pickup">Pick Up Myself</option>
              <option value="delivery">Home Delivery</option>
            </select>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-xl h-28"
              placeholder="Message on the cake"
            />

            <div className="border border-dashed rounded-xl p-6 text-center">
              {preview && (
                <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden mb-4">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <label className="cursor-pointer text-rose-500 font-medium">
                <FaCamera className="inline mr-2" />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (!e.target.files?.[0]) return;
                    const file = e.target.files[0];
                    setImageFile(file);
                    setPreview(URL.createObjectURL(file));
                  }}
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-400 text-white py-3 rounded-full hover:bg-rose-500"
            >
              Place Order
            </button>

          </form>
        </div>

        {/* CONTACT BOX */}
        <div className="bg-pink-50 shadow-xl rounded-3xl overflow-hidden flex flex-col">
          <div className="bg-white p-10 flex-1">
            <h2 className="text-3xl font-serif text-rose-800 text-center mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-600">
              <p className="flex items-center gap-3">
                <FaPhone className="text-rose-400" />
                +251 984 623 769
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-rose-400" />
                jerrysweet@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaInstagram className="text-rose-400" />
                @jerrysweethaven
              </p>
              <p className="flex items-center gap-3">
                <SiTiktok className="text-rose-400" />
                @jerrysweet
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-rose-400" />
                BahirDar, Ethiopia
              </p>
            </div>
          </div>

          <div className="flex-1 relative h-60">
            <Image
              src="/hero-cake5.png"
              alt="Cake"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-sm">
            <div className="text-5xl mb-4">🎂</div>
            <h2 className="text-2xl font-serif text-rose-800 mb-2">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Jerry's Sweet 💕
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  );
}