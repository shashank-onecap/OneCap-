import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";


export type Text1Type = {
  className?: string;
  statNames?: string;
  showStatNames?: boolean;

  /** Variant props */
  direction?: string;
  number?: 1;

  /** Style props */
  textAlignSelf?: CSSProperties["alignSelf"];
  textPadding?: CSSProperties["padding"];
  textHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textFlex?: CSSProperties["flex"];
  statNamesFontWeight?: CSSProperties["fontWeight"];
  statNamesTextDecoration?: CSSProperties["textDecoration"];
  statNamesAlignSelf?: CSSProperties["alignSelf"];
  statNamesWidth?: CSSProperties["width"];
  statNamesHeight?: CSSProperties["height"];
  statNamesColor?: CSSProperties["color"];
  statNamesTextAlign?: CSSProperties["textAlign"];
};

const Text1: NextPage<Text1Type> = ({
  className = "",
  direction = "Vertical",
  number = 4,
  textAlignSelf,
  textPadding,
  textHeight,
  textWidth,
  textFlex,
  statNames,
  showStatNames,
  statNamesFontWeight,
  statNamesTextDecoration,
  statNamesAlignSelf,
  statNamesWidth,
  statNamesHeight,
  statNamesColor,
  statNamesTextAlign,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: textAlignSelf,
      padding: textPadding,
      height: textHeight,
      width: textWidth,
      flex: textFlex,
    };
  }, [textAlignSelf, textPadding, textHeight, textWidth, textFlex]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: statNamesFontWeight,
      textDecoration: statNamesTextDecoration,
      alignSelf: statNamesAlignSelf,
      width: statNamesWidth,
      height: statNamesHeight,
      color: statNamesColor,
      textAlign: statNamesTextAlign,
    };
  }, [
    statNamesFontWeight,
    statNamesTextDecoration,
    statNamesAlignSelf,
    statNamesWidth,
    statNamesHeight,
    statNamesColor,
    statNamesTextAlign,
  ]);

  return (
    <div
      className={`flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center py-boundvariablesdata3 px-boundvariablesdata5 text-left text-sm text-black-100 font-regular ${className}`}
      data-direction={direction}
      data-number={number}
      style={textStyle}
    >
      {showStatNames && (
        <div
          className="w-[283px] h-5 relative leading-[20px] font-semibold inline-block"
          style={text1Style}
        >
          {statNames}
        </div>
      )}
    </div>
  );
};

export default Text1;
