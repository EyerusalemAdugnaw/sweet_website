"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  setDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface Order {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  cakeType?: string;
  cakeSize?: string;
  date?: string;
  message?: string;
  imageUrl?: string;
  status?: string;
  deliveryType?: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  /* ✅ Logout Function */
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  /* Real-time order listener */
  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const orderList: Order[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data() as Order;

        return {
          ...data,
          id: docSnap.id,
        };
      });

      setOrders(orderList);
    });

    return unsubscribe;
  }, []);

  /* ⭐️ FINAL COMPLETE ORDER FUNCTION */
  const updateStatus = async (orderId: string, status: string) => {
    await updateDoc(doc(db, "orders", orderId), { status });

    if (status === "completed") {
      const order = orders.find((o) => o.id === orderId);

      if (order) {
        let notificationMessage = "";

        if (order.deliveryType === "pickup") {
          notificationMessage =` 🎂 Your order is ready for pickup.
📍 Location: BahirDar, Ethiopia  
☎ Contact: +251 984 623 769  

If you want more information, contact us.`;
        } else {
          notificationMessage = `🚚 Your order is ready and will be delivered soon.

Our delivery team will contact you.`;
        }

        await setDoc(doc(db, "order_history", orderId), {
          id: order.id,
          name: order.name || "",
          phone: order.phone || "",
          email: order.email || "",
          cakeType: order.cakeType || "",
          cakeSize: order.cakeSize || "",
          date: order.date || "",
          message: order.message || "",
          imageUrl: order.imageUrl || "",
          status: "completed",
        });

        await deleteDoc(doc(db, "orders", orderId));

        await emailjs.send(
          
          {
            name: order.name,
            email: order.email,
            message: notificationMessage,
          },
          
        );

        alert("Customer notification sent 🎉");
      }
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 px-6 md:px-20 py-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h1 className="text-4xl font-serif text-rose-800 text-center md:text-left">
          🧁 Admin Order Dashboard
        </h1>

        <div className="flex gap-4">
          <Link
            href="/admin/order_history"
            className="bg-rose-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-rose-700 transition text-center"
          >
            View Order History
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => (
          <div
          key={order.id}
            className="bg-white rounded-3xl shadow-xl p-6 space-y-4 hover:shadow-2xl transition"
          >
            {order.imageUrl && (
              <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                <Image
                  src={order.imageUrl}
                  alt="cake"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="space-y-2 text-gray-600 text-sm">
              <p><span className="font-semibold">Name:</span> {order.name}</p>
              <p><span className="font-semibold">Phone:</span> {order.phone}</p>
              <p><span className="font-semibold">Cake Type:</span> {order.cakeType}</p>
              <p><span className="font-semibold">Cake Size:</span> {order.cakeSize}</p>
              <p><span className="font-semibold">Date:</span> {order.date}</p>
              <p className="line-clamp-2">
                <span className="font-semibold">Message:</span> {order.message}
              </p>
            </div>

            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : order.status === "approved"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status || "pending"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => updateStatus(order.id, "approved")}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(order.id, "completed")}
                className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
