import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import Navbarlanding from "../components/navbarlanding";
import RightBar from "../components/right-bar";
import Dashboardcontent from "../components/dashboard/dashboardcontent";
const dashboard: NextPage = () => {
  return (
    <div className="w-full relative rounded-boundvariablesdata bg-white-100 flex flex-row items-start justify-start flex-wrap content-start gap-0 leading-[normal] tracking-[normal] [row-gap:20px]">
      {/* Sidebar - Fixed Position */}
      <div className="fixed left-0 top-0 h-full w-[250px] bg-white z-50 ">
        <Sidebar />
      </div>

      {/* Main Content - Margin Left to Prevent Overlap */}
      <section className="flex-1 flex flex-col items-center justify-start gap-[304px] min-w-[616px] max-w-full ml-[250px] mq725:gap-[76px] mq725:min-w-full mq975:gap-[152px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[110px] max-w-full mq725:gap-[27px] mq975:gap-[55px]">
          {/* Navbar - Stays at the Top */}
          <div className="w-full sticky top-0 z-40 bg-white">
            <Navbarlanding />
          </div>
          <Dashboardcontent />
        </div>
       
      </section>

      {/* Right Sidebar */}
      <RightBar />
    </div>
  );
};

export default dashboard;
