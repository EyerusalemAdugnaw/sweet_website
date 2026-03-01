"use client";
import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

interface Order {
  id: string;
  name?: string;
  phone?: string;
  cakeType?: string;
  cakeSize?: string;
  date?: string;
  message?: string;
  imageUrl?: string;
  status?: string;
}

export default function OrderHistoryPage() {
  const router = useRouter();
  const [historyOrders, setHistoryOrders] = useState<Order[]>([]);

  /* ⭐ Logout Function */
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  /* ⭐ Real-time history listener */
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "order_history"),
      (snapshot) => {
        const historyList: Order[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            ...data,
          };
        });

        setHistoryOrders(historyList);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-10 pb-10">

      {/* ⭐ Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

        <h1 className="text-4xl font-serif text-rose-800 text-center md:text-left">
          📜 Completed Orders History
        </h1>

        <div className="flex gap-4">

          {/* Back Button */}
          <button
            onClick={() => router.push("/admin/orders")}
            className="bg-rose-600 text-white px-5 py-2 rounded-xl hover:bg-rose-700 transition"
          >
            Back to Dashboard
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>
      </div>

      {/* ⭐ History Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-lg rounded-2xl p-5 space-y-2"
          >
            {order.imageUrl && (
              <div className="relative h-40 w-full rounded-xl overflow-hidden">
                <Image
                  src={order.imageUrl}
                  alt="cake"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Cake:</strong> {order.cakeType}</p>
            <p><strong>Size:</strong> {order.cakeSize}</p>
            <p><strong>Date:</strong> {order.date}</p>

            <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
              Completed
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}