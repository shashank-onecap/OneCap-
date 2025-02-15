import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Text1 from "./text1";

export type ButtonType = {
  className?: string;

  /** Variant props */
  size?: string;
  state?: string;
  style?: string;
  type?: string;

  /** Style props */
  buttonPadding?: CSSProperties["padding"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  size = "Large",
  state = "Default",
  style = "Borderless",
  type = "Icon Text Icon",
  buttonPadding,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  return (
    <div
      className={`rounded-boundvariablesdata4 flex flex-row items-center justify-center py-boundvariablesdata5 px-0 ${className}`}
      data-size={size}
      data-state={state}
      data-style={style}
      data-type={type}
      style={buttonStyle}
    >
      <Text1
        direction="Vertical"
        number={1}
        textAlignSelf="unset"
        textPadding="unset"
        textHeight="unset"
        textWidth="unset"
        textFlex="unset"
        itemNameList="Dashboards"
        showItemNameList
        itemNameListFontWeight="unset"
        itemNameListTextDecoration="none"
        itemNameListAlignSelf="stretch"
        itemNameListWidth="unset"
        itemNameListHeight="unset"
        itemNameListColor="rgba(28, 28, 28, 0.4)"
        itemNameListTextAlign="center"
        itemNameListFontFamily="'Helvetica Neue'"
      />
    </div>
  );
};

export default Button;
