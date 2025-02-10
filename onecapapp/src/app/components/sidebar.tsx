"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import sidebarItems from "../data/sidebardata";
import { usePathname } from "next/navigation"; // Updated from useRouter

const Sidebar = () => {
  const pathname = usePathname(); // Get current route
  const isProfile = pathname === "/profile"; // ✅ Fix: Check if current path is /profile

  return (
    <div className="flex flex-col gap-2 p-2 h-screen">
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center gap-2 p-2 mt-3">
        <Image src="/logo.svg" alt="logo" width={20} height={20} className="lg:hidden"/>
        <Image src="/onecapname.svg" alt="logo" width={150} height={150} className="hidden lg:block"/>
      </div>
      </Link>
      {/* Sidebar Items */}
      <div className="mt-3">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href; // Check if current path is active
          return (
            <Link key={item.label} href={item.href} className="block">
              <div
                className={`flex items-center gap-2 p-2 m-1 rounded-md ${
                  isActive ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-semibold lg:block hidden text-gray-500">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <Link href="/profile" className="block mt-auto">
        <div
          className={`flex items-center gap-2 p-2 rounded-full cursor-pointer ${
            isProfile ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          <Image
            src="/usericon.png"
            alt="user"
            width={20}
            height={20}
            className="w-6 h-6"
          />
          <span className="text-sm text-gray-500 font-semibold hidden lg:block">
            John Doe
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
