import type { NextPage } from "next";
import Image from "next/image";

export type LandingbodyType = {
  className?: string;
};

const Landingbody: NextPage<LandingbodyType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[881px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-13xl text-black-100 font-helvetica-neue ${className}`}
    >
      <div className="w-[373px] flex flex-col items-center justify-start max-w-full">
        <Image
          className="w-48 h-48 relative"
          loading="lazy"
          width={192}
          height={192}
          alt=""
          src="/empty--img-empty-collect-collections.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-center gap-6">
          <div className="self-stretch flex flex-col items-center justify-start gap-2">
            <h1 className="m-0 w-[182px] relative text-inherit font-bold font-[inherit] flex items-center justify-center mq450:text-lgi mq975:text-7xl">
              Get started!
            </h1>
            <div className="self-stretch relative text-xs leading-[16px] font-medium text-gray-200">
              <p className="m-0">
                Connect your data source and define your metrics to unlock
                simple
              </p>
              <p className="m-0">
                self service analytics for everyone in your organisation.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4 text-xs text-black">
            <div className="h-14 flex-1 rounded-6xs bg-gray-100 border-midnightblue border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center p-[18px]">
              <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[117px]">
                Connect data source
              </div>
            </div>
            <div className="h-14 rounded-6xs bg-midnightblue border-darkslategray border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center p-[18px] text-white-100">
              <div className="relative leading-[16px] font-medium inline-block min-w-[81px]">
                Try demo data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingbody;
