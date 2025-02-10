"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const pageName = pathname === "/" ? "Dashboard" : pathname.replace("/", "").replace("-", " ");

  return (
    <div className="flex items-center justify-between p-2 gap-2   mt-3 border-b border-grey-300">
      {/* Page Title */}
      <h3 className="text-sm mr-2 mb-2 font-semibold text-gray-400 pl-2">{pageName}</h3>

      {/* Search and Bell Icon */}
      <div className="flex items-center gap-4 right-0 relative pb-2">
        {/* Search Box */}
        <div className="hidden md:flex bg-gray-200 items-center gap-2 text-xs ring-gray-300 px-2 ring-[0.5px] rounded-md">
          <Image src="/search.svg" alt="search" width={20} height={20} />
          <input type="text" placeholder="Search" className="w-[150px] outline-none bg-transparent p-2 text-md" />
        </div>

        {/* Notification Icon */}
        <div className="flex items-center gap-2">
          <Image src="/bell.png" alt="notification" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
