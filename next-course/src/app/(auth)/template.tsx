"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <h1
            className={isActive ? "font-bold" : "text-blue-600 mr-4"}
            key={link.href} // Key added here
          >
            <Link href={link.href}>
              {link.name}
            </Link>
          </h1>
        );
      })}
      {children} {/* Ensure you render children */}
    </div>
  );
}
