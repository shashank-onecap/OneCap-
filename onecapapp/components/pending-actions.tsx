import type { NextPage } from "next";
import Text1 from "./text1";
import IconSet from "./icon-set";
import Strip from "./strip";

export type PendingActionsType = {
  className?: string;
};

const mockActions = [
  {
    id: 1,
    icon: "/3d05@2x.png",
    text: "You have a bug that needs to be fixed.",
    timestamp: "Just now",
  },
  {
    id: 2,
    icon: "/female05@2x.png",
    text: "Released a new version",
    timestamp: "59 minutes ago",
  },
  {
    id: 3,
    icon: "/3d08@2x.png",
    text: "Submitted a bug",
    timestamp: "12 hours ago",
  },
  {
    id: 4,
    icon: "/male07@2x.png",
    text: "Modified A data in Page",
    timestamp: "Today, 11:59 AM",
  },
  {
    id: 5,
    icon: "/male11@2x.png",
    text: "Deleted a page in Project",
    timestamp: "Feb 2, 2023",
  },
];

const PendingActions: NextPage<PendingActionsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start relative gap-boundvariablesdata3 text-left text-sm text-black-100 font-regular ${className}`}
    >
        <Text1
        direction="Vertical"
        number={1}
        textAlignSelf="stretch"
        textPadding="8px 4px"
        textHeight="unset"
        textWidth="unset"
        textFlex="unset"
        statNames="Pending Actions"
        showStatNames
        statNamesFontWeight="600"
        statNamesTextDecoration="none"
        statNamesAlignSelf="stretch"
        statNamesWidth="unset"
        statNamesHeight="unset"
        statNamesColor="#1c1c1c"
        statNamesTextAlign="left"
      />
      {mockActions.map((action) => (
        <div
          key={action.id}
          className="w-[232px] flex-1 rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3"
        >
          <IconSet
            bg={false}
            badge={false}
            size={24}
            chartPieSlice={action.icon}
          />
          <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
            <div className="w-48 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              {action.text}
            </div>
            <div className="self-stretch relative text-xs leading-[18px] text-black-40">
              {action.timestamp}
            </div>
          </div>
        </div>
      ))}
      <Strip
        direction="Vertical"
        number={4}
        stripMargin="0 !important"
        stripPosition="absolute"
        stripTop="80px"
        stripLeft="16px"
      />
    </div>
  );
};

export default PendingActions;
