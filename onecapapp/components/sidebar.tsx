import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export type SidebarType = {
  className?: string;
  onClose?: () => void;
};

const Sidebar: NextPage<SidebarType> = ({ className = "", onClose }) => {
  const router = useRouter();
  const navigationItems = [
    { src: "/dashboard.svg", srcactive: "/dashboardactive.svg", text: "Dashboard", href: "/dashboard" },
    { src: "/receviableinactive.svg", srcactive: "/receviableactive.svg", text: "Account Receivable", href: "/AccountsReceivable" },
    { src: "/payments.svg", srcactive: "/paymentsactive.svg", text: "Payments", href: "/payments" },
    { src: "/rewards.svg", srcactive: "/rewardsactive.svg", text: "Rewards", href: "/rewards" },
    { src: "/icon.svg", srcactive: "/iconactive.svg", text: "User Management", href: "/user-management" },
  ];

  const isHomePage = router.pathname === "/";

  return (
    <div className={`h-screen border-black-10 border-r-[1px] border-solid box-border flex flex-col items-start justify-between py-5 px-4 text-left text-sm text-black-100 font-helvetica-neue md:hidden sm:hidden ${className}`}>
      {/* Main Sidebar Content */}
      <div className="w-full flex flex-col items-start justify-start gap-4 flex-grow">
        {/* Logo */}
        <div className="w-full flex flex-col items-start justify-start ml-3 pb-4">
          <Link href={isHomePage ? "#" : "/dashboard"} passHref>
            <Image className="h-7 w-auto" loading="lazy" width={150} height={28} alt="Logo" src="/onecaplogo.svg" />
          </Link>
        </div>

        {/* Navigation Items */}
        {navigationItems.map((item, index) => {
          const isActive = router.pathname === item.href;
          return (
            <Link href={isHomePage ? "#" : item.href} key={index} passHref className="no-underline text-black-100 w-full">
              <div className={`w-full flex flex-row items-center py-3 px-1 rounded-lg gap-4 transition-colors duration-200 ${isHomePage ? "cursor-not-allowed" : "cursor-pointer"} ${isActive ? "bg-[#1C1C1C0D] text-black-100" : "hover:bg-black-5 text-gray-400"}`}>
                <Image className="h-6 w-6 ml-2" loading="lazy" width={24} height={24} alt={item.text} src={isActive ? item.srcactive : item.src} />
                <span className={`font-inter text-[14px] font-normal ${isActive ? "text-black-100" : "text-gray-400"}`}>{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Content */}
      <div className="w-full flex items-center gap-3 mt-auto py-4 px-4 border-t border-gray-200">
        <Image src="/male06@2x.png" alt="User Avatar" width={24} height={24} className="rounded-full" />
        <h1 className="text-sm font-normal" style={{ fontFamily: '"Helvetica Neue", sans-serif' }}>John Doe</h1>
      </div>
    </div>
  );
};

export default Sidebar;