"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname()

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <h1 className={isActive?"font-bold":"text-blue-600 mr-4"}>
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          </h1>
        );
      })}

    
    </div>
  );
}
