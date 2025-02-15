import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import Navbarlanding from "../components/navbar";
import AccountReceivablecontent from "../components/accountreceivable/AccountReceivablecontent ";

const AccountsReceivable: NextPage = () => {
  return (
    <div className="w-full relative rounded-boundvariablesdata bg-white-100 flex flex-row items-start justify-start flex-wrap content-start gap-0 leading-[normal] tracking-[normal] [row-gap:20px]">
      {/* Sidebar - Fixed Position */}
      <div className="fixed left-0 top-0 h-full w-[240px] bg-white z-50 ">
        <Sidebar />
      </div>

      {/* Main Content - Margin Left to Prevent Overlap */}
      <section className="flex-1 flex flex-col items-center justify-start  min-w-[616px] max-w-full ml-[250px] mq725:gap-[76px] mq725:min-w-full mq975:gap-[152px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[110px] max-w-full mq725:gap-[27px] mq975:gap-[55px]">
          {/* Navbar - Stays at the Top */}
          <div className="w-full sticky top-0 z-40 bg-white">
            <Navbarlanding />
          </div>
          <div className="w-[95%] border border-solid border-[#EAECF0] rounded-md py-1 px-4 -mt-20">
            <AccountReceivablecontent />
        </div> 
        </div>
      </section>
    </div>
  );
};

export default AccountsReceivable;
