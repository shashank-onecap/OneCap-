import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
// import IconSet from "./icon-set";
import Image from "next/image";

export type IconTextType = {
  className?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  iconTextGap?: CSSProperties["gap"];
  iconTextFlex?: CSSProperties["flex"];
};

const IconText: NextPage<IconTextType> = ({
  className = "",
  type = "Icon Text",
  iconTextGap,
  iconTextFlex,
}) => {
  const iconTextStyle: CSSProperties = useMemo(() => {
    return {
      gap: iconTextGap,
      flex: iconTextFlex,
    };
  }, [iconTextGap, iconTextFlex]);

  return (
    <div
      className={`rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center gap-boundvariablesdata12 text-left text-sm text-black-100 font-regular ${className}`}
      data-type={type}
      style={iconTextStyle}
    >
      {/* <IconSet
        bG={false}
        badge={false}
        size={24}
        chartPieSlice="pending_I319:32141;11048:14274;10412:2199"
      /> */}
      <div className="rounded-boundvariablesdata4 flex flex-col items-start justify-center">
        <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default IconText;
