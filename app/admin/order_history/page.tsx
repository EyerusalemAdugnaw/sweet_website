"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
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
  const [historyOrders, setHistoryOrders] = useState<Order[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "order_history"),
      (snapshot) => {
        const historyList: Order[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();

          return {
            id: docSnap.id, // defined only once
            name: data.name,
            phone: data.phone,
            cakeType: data.cakeType,
            cakeSize: data.cakeSize,
            date: data.date,
            message: data.message,
            imageUrl: data.imageUrl,
            status: data.status,
          };
        });

        setHistoryOrders(historyList);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8">
        📜 Completed Orders History
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-lg rounded-2xl p-5"
          >
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