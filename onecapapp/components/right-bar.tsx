import type { NextPage } from "next";
import NotificationList from "./notification-list";
import PendingActions from "./pending-actions";
import Strip from "./strip";
import Text1 from "./text1";
import Content from "./content";

export type RightBarType = {
  className?: string;
  onClose?: () => void;
};

const RightBar: NextPage<RightBarType> = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[280px] border-black-10 border-l-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-5 px-[19px] pb-[419px] relative gap-6 h-full max-w-[90%] text-left text-sm text-black-100 font-helvetica-neue sm:flex-1 mq350small:flex-1 mq725:flex-1 mq725:self-stretch mq725:h-auto mq725:pb-[177px] mq725:box-border mq450:flex-1 mq1025:pb-[272px] mq1025:box-border ${className}`}
    >
      <NotificationList />
      <PendingActions />
    </div>
  );
};

export default RightBar;
