import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export type NavbarlandingType = {
  className?: string;
};

const Navbarlanding: NextPage<NavbarlandingType> = ({ className = "" }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const formatPathname = (path: string) => {
    if (path === "/") return "Dashboard";
    return path
      .split("/")
      .filter(Boolean) // Remove empty strings
      .map((segment) =>
        segment
          .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )
      .join(" / ");
  };

  const pathnameText = formatPathname(pathname);

  return (
    <header
      className={`self-stretch border-black-10 border-b-[1px] border-solid flex flex-row items-center justify-between pt-4 px-6 pb-4 sticky top-0 z-[99] bg-white ${className}`}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src="/dashboardleft.svg" alt="Logo" width={30} height={30} />
        <h1 className="font-inter font-normal text-[18px] leading-[20px] tracking-[0%] text-gray-400">
          {pathnameText} /
        </h1>
      </div>

      {/* Search Box and Icons */}
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-1 justify-between bg-black-5 rounded-lg p-2">
          <Image
            src="/search.svg"
            alt="Search icon"
            width={20}
            height={20}
            className="color-black-10"
          />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent font-inter font-normal text-[#1C1C1C]"
          />
          <Image
            src="/cmdmac.svg"
            alt="Command shortcut icon"
            width={20}
            height={20}
          />
        </div>
        <Image src="/bell.svg" alt="Notifications" width={40} height={40} />
        <Image
          src="/dashboardright.svg"
          alt="Dashboard settings"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};

export default Navbarlanding;
