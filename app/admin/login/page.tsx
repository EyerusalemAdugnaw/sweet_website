"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function AdminLogin() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)

      router.push("/admin/orders")

    } catch {
      alert("Login failed")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100">

      <form onSubmit={login}
        className="bg-white p-10 rounded-3xl shadow-xl space-y-5 w-96">

        <h2 className="text-2xl font-serif text-rose-800 text-center">
          Admin Login
        </h2>

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded-xl"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-rose-400 text-white p-3 rounded-xl">
          Login
        </button>

      </form>
    </main>
  )
}