import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";


export type StripType = {
  className?: string;

  /** Variant props */
  direction?: string;
  number?: 4;

  /** Style props */
  stripMargin?: CSSProperties["margin"];
  stripPosition?: CSSProperties["position"];
  stripTop?: CSSProperties["top"];
  stripLeft?: CSSProperties["left"];
};

const Strip: NextPage<StripType> = ({
  className = "",
  direction = "Horizontal",
  number = 6,
  stripMargin,
  stripPosition,
  stripTop,
  stripLeft,
}) => {
  const stripStyle: CSSProperties = useMemo(() => {
    return {
      margin: stripMargin,
      position: stripPosition,
      top: stripTop,
      left: stripLeft,
    };
  }, [stripMargin, stripPosition, stripTop, stripLeft]);

  return (
    <div
      className={`w-px h-44 !m-[0] absolute top-[376px] left-[36px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-boundvariablesdata8 z-[2] ${className}`}
      data-direction={direction}
      data-number={number}
      style={stripStyle}
    >
      <div className="self-stretch flex-1 relative bg-black-10" />
      <div className="self-stretch flex-1 relative bg-black-10" />
      <div className="self-stretch flex-1 relative bg-black-10" />
      <div className="self-stretch flex-1 relative bg-black-10" />
    </div>
  );
};

export default Strip;
