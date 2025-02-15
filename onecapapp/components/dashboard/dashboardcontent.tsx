import React from "react";

interface DashboardContentProps {
  className?: string; // Make className an optional prop
}

const DashboardContent: React.FC<DashboardContentProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start py-0  max-w-full text-center text-lg text-black-100 font-helvetica-neue ${className}`}
    >
      <div className="w-full flex flex-row items-center gap-2 justify-between">
        <div> piechart</div>
        <div>stackedareachart</div>
      </div>
      <div className="w-full flex flex-row items-center gap-2 justify-between">
        <div> barchart</div>
        <div>singledareachart</div>
      </div>
      <div className="w-full flex flex-row items-center gap-2 justify-between">
        <div>table</div>
        <div className="w-full flex flex-col items-center gap-2 justify-between">
            <div>totalbalance</div>
            <div>totalpayments</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
