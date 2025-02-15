import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Text1 from "./text1";
import IconSet from "./icon-set";

export type BugReportsType = {
  className?: string;
  barContentPadding?: CSSProperties["padding"];
};

const mockNotifications = [
  { icon: "/bugbeetle.svg", message: "You have a bug that needs to be fixed.", time: "Just now" },
  { icon: "/user.svg", message: "New user registered", time: "59 minutes ago" },
  { icon: "/bugbeetle.svg", message: "You have a bug that needs to be fixed.", time: "12 hours ago" },
  { icon: "/broadcast.svg", message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const BugReports: NextPage<BugReportsType> = ({ className = "", barContentPadding }) => {
  const barContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: barContentPadding,
    };
  }, [barContentPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-boundvariablesdata3 text-left text-sm text-black-100 font-regular ${className}`}
      style={barContentStyle}
    >
      <Text1
        direction="Vertical"
        number={1}
        textAlignSelf="stretch"
        textPadding="8px 4px"
        textHeight="unset"
        textWidth="unset"
        textFlex="unset"
        statNames="Notifications"
        showStatNames
        statNamesFontWeight="600"
        statNamesTextDecoration="none"
        statNamesAlignSelf="stretch"
        statNamesWidth="unset"
        statNamesHeight="unset"
        statNamesColor="#1c1c1c"
        statNamesTextAlign="left"
      />
      {mockNotifications.map((notification, index) => (
        <div
          key={index}
          className="w-[232px] flex-1 rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3"
        >
          <IconSet bg badge={false} size={16} chartPieSlice={notification.icon} />
          <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
            <div className="w-48 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              {notification.message}
            </div>
            <div className="self-stretch relative text-xs leading-[18px] text-black-40">
              {notification.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BugReports;
