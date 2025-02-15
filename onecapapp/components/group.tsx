import type { NextPage } from "next";
import Button from "./button";
import Text1 from "./text1";

export type GroupType = {
  className?: string;

  /** Variant props */
  direction?: string;
  number?: 3;
};

const Group: NextPage<GroupType> = ({
  className = "",
  direction = "Horizontal",
  number = 4,
}) => {
  return (
    <div
      className={`rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center gap-2 ${className}`}
      data-direction={direction}
      data-number={number}
    >
      <Button size="Small" state="Default" style="Borderless" type="Text" />
      <Text1
        direction="Vertical"
        number={1}
        textAlignSelf="unset"
        textPadding="unset"
        textHeight="unset"
        textWidth="unset"
        textFlex="unset"
        itemNameList="/"
        showItemNameList
        itemNameListFontWeight="unset"
        itemNameListTextDecoration="unset"
        itemNameListAlignSelf="stretch"
        itemNameListWidth="unset"
        itemNameListHeight="unset"
        itemNameListColor="rgba(28, 28, 28, 0.2)"
        itemNameListTextAlign="left"
        itemNameListFontFamily="Inter"
      />
      <Button
        size="Small"
        state="Default"
        style="Borderless"
        type="Text"
        buttonPadding="4px 8px"
      />
    </div>
  );
};

export default Group;
