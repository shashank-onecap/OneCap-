import type { NextPage } from "next";
import Image from "next/image";

export type NeedhelpType = {
  className?: string;
};

const Needhelp: NextPage<NeedhelpType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-mini bg-midnightblue overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-2 max-w-full text-left text-base text-white-100 font-helvetica-neue ${className}`}
    >
      <div className="w-[412px] flex flex-col items-center justify-start gap-4 max-w-full">
        <div className="relative leading-[16px] font-medium">
          Need help getting started?
        </div>
        <div className="relative text-xs leading-[16px] text-gainsboro text-center">
          Invite a teammate to collaborate on setup or contact Steep and let us
          guide you through the setup process.
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-end justify-center gap-[15px] text-center text-xs text-gainsboro mq725:flex-wrap mq725:justify-start">
        <div className="overflow-hidden flex flex-row items-center justify-start py-2 px-0 gap-[5px]">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            src="/tablericonusers.svg"
          />
          <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[90px]">
            Invite teammate
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-2 px-0 gap-[5px]">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            src="/tablericonmessage.svg"
          />
          <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[94px]">
            Contact OneCap
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-2 px-0 gap-[5px]">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            src="/tablericoncalendarweek.svg"
          />
          <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[98px]">
            Schedule a demo
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-2 px-0 gap-[5px]">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            width={16}
            height={16}
            alt=""
            src="/tablericonhelpoctagon.svg"
          />
          <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[66px]">
            Help center
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needhelp;
