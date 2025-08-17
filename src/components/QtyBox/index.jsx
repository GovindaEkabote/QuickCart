import React from "react";

const QtyBox = () => {
  return (
    <div className="qtyBox">
      <input
        type="number"
        placeholder="Qty"
        min="1"
        defaultValue={1}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
        }}
        className="w-full h-[40px] text-[18px] font-bold text-center focus:outline-none border border-[rgba(0,0,0,0.5)] !mt-4 rounded-md"
      />
    </div>
  );
};

export default QtyBox;
