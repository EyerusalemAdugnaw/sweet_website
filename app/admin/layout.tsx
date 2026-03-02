"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isLoginPage = pathname === "/admin/login";

      if (!user && !isLoginPage) {
        router.replace("/admin/login");
      }

      if (user && isLoginPage) {
        router.replace("/admin/orders");
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  return <>{children}</>;
}