import type { NextPage } from "next";
import Text1 from "./text1";
import IconSet from "./icon-set";

export type ContactListType = {
  className?: string;
};

const ContactList: NextPage<ContactListType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-px gap-2 text-left text-sm text-black-100 font-helvetica-neue ${className}`}
    >
      <Text1
        direction="Vertical"
        number={1}
        textAlignSelf="stretch"
        textPadding="8px 4px"
        textHeight="36px"
        textWidth="unset"
        textFlex="unset"
        itemNameList="Pending Actions"
        showItemNameList
        itemNameListFontWeight="500"
        itemNameListTextDecoration="unset"
        itemNameListAlignSelf="stretch"
        itemNameListWidth="unset"
        itemNameListHeight="unset"
        itemNameListColor="#1c1c1c"
        itemNameListTextAlign="left"
        itemNameListFontFamily="'Helvetica Neue'"
      />
      <div className="w-[232px] flex-1 rounded-boundvariablesdata4 h-[46px] flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3">
        <IconSet bG={false} badge={false} size={24} profilePic="/3d05@2x.png" />
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="w-48 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            You have a bug that needs to be fixed.
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-black-40">
            Just now
          </div>
        </div>
      </div>
      <div className="w-[232px] flex-1 rounded-boundvariablesdata4 h-[46px] flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3">
        <IconSet
          bG={false}
          badge={false}
          size={24}
          profilePic="/female05@2x.png"
        />
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            Released a new version
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-black-40">
            59 minutes ago
          </div>
        </div>
      </div>
      <div className="w-[232px] flex-1 rounded-boundvariablesdata4 h-[46px] flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3">
        <IconSet bG={false} badge={false} size={24} profilePic="/3d08@2x.png" />
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            Submitted a bug
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-black-40">
            12 hours ago
          </div>
        </div>
      </div>
      <div className="w-[232px] flex-1 rounded-boundvariablesdata4 h-[46px] flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3">
        <IconSet
          bG={false}
          badge={false}
          size={24}
          profilePic="/male07@2x.png"
        />
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">{`Modified A data in Page `}</div>
          <div className="self-stretch relative text-xs leading-[18px] text-black-40">
            Today, 11:59 AM
          </div>
        </div>
      </div>
      <div className="w-[232px] flex-1 rounded-boundvariablesdata4 h-[46px] flex flex-row items-start justify-start flex-wrap content-start p-boundvariablesdata5 box-border gap-boundvariablesdata3">
        <IconSet
          bG={false}
          badge={false}
          size={24}
          profilePic="/male11@2x.png"
        />
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">{`Deleted a page in Project `}</div>
          <div className="self-stretch relative text-xs leading-[18px] text-black-40">
            Feb 2, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
