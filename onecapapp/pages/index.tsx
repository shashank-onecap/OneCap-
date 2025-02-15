import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import Navbarlanding from "../components/navbar";
import Landingbody from "../components/landingbody";
import Needhelp from "../components/needhelp";
import RightBar from "../components/right-bar";

const startingPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-boundvariablesdata bg-white-100 flex flex-row items-start justify-start flex-wrap content-start gap-0 leading-[normal] tracking-[normal] [row-gap:20px]">
      {/* Sidebar - Fixed Position */}
      <div className="fixed left-0 top-0 h-full w-[240px] bg-white z-50 ">
        <Sidebar />
      </div>

      {/* Main Content - Margin Left to Prevent Overlap */}
      <section className="flex-1 flex flex-col items-center justify-start gap-[304px] min-w-[616px] max-w-full ml-[250px] mq725:gap-[76px] mq725:min-w-full mq975:gap-[152px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[110px] max-w-full mq725:gap-[27px] mq975:gap-[55px]">
          {/* Navbar - Stays at the Top */}
          <div className="w-full sticky top-0 z-40 bg-white">
            <Navbarlanding />
          </div>
          <Landingbody />
        </div>
        <div className="flex flex-row items-center justify-center py-0 px-[90px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq975:pl-[45px] mq975:pr-[45px] mq975:box-border">
          <Needhelp />
        </div>
      </section>

      {/* Right Sidebar */}
      <RightBar />
    </div>
  );
};

export default startingPage;
