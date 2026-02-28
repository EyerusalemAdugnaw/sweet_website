export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await addDoc(collection(db, "orders"), {
      name: data.name,
      phone: data.phone,
      cakeType: data.cakeType,
      cakeSize: data.cakeSize,
      date: data.date,
      message: data.message,
      imageUrl: data.imageUrl || "",
      createdAt: new Date()
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Order failed" }, { status: 500 });
  }
}