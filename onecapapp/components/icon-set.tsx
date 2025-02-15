import type { NextPage } from "next";
import Image from "next/image";

export type IconSetType = {
  className?: string;
  chartPieSlice: string;

  /** Variant props */
  bg?: boolean;
  badge?: boolean;
  size?: 16 | 20 | 24;
};

const IconSet: NextPage<IconSetType> = ({
  className = "",
  bg = false,
  badge = false,
  size = 80,
  chartPieSlice,
}) => {
  return (
    <div
      className={`rounded-radius-8 overflow-hidden flex flex-row items-center justify-center data-[bG='false']:data-[badge='false']:data-[size='20']:[overflow:unset] data-[bG='true']:data-[badge='false']:data-[size='16']:[overflow:unset] data-[bG='true']:data-[badge='false']:data-[size='16']:bg-primary-blue data-[bG='true']:data-[badge='false']:data-[size='16']:p-1 data-[bG='false']:data-[badge='false']:data-[size='16']:[overflow:unset] [&_.chartpieslice-icon]:data-[bG='false']:data-[badge='false']:data-[size='20']:h-5 [&_.chartpieslice-icon]:data-[bG='false']:data-[badge='false']:data-[size='20']:w-5 [&_.chartpieslice-icon]:data-[bG='true']:data-[badge='false']:data-[size='16']:h-4 [&_.chartpieslice-icon]:data-[bG='true']:data-[badge='false']:data-[size='16']:w-4 [&_.chartpieslice-icon]:data-[bG='false']:data-[badge='false']:data-[size='16']:h-4 [&_.chartpieslice-icon]:data-[bG='false']:data-[badge='false']:data-[size='16']:w-4 ${className}`}
      data-bG={bg}
      data-badge={badge}
      data-size={size}
    >
      <Image
        className="chartpieslice-icon h-boundvariablesdata7 w-boundvariablesdata7 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src={chartPieSlice}
      />
    </div>
  );
};

export default IconSet;
