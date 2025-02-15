import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import IconText from "./icon-text";

export type ContentType = {
  className?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  nameBadgePadding?: CSSProperties["padding"];
};

const Content: NextPage<ContentType> = ({
  className = "",
  type = "Left & Right",
  nameBadgePadding,
}) => {
  const nameBadgeStyle: CSSProperties = useMemo(() => {
    return {
      padding: nameBadgePadding,
    };
  }, [nameBadgePadding]);

  return (
    <div
      className={`self-stretch rounded-boundvariablesdata4 flex flex-row items-center mt-auto justify-start flex-wrap content-center py-boundvariablesdata3 px-boundvariablesdata12 ${className}`}
      data-type={type}
      style={nameBadgeStyle}
    >
      <IconText type="Icon Text" />
    </div>
  );
};

export default Content;
