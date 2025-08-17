import Button from "@mui/material/Button";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [qtyValue, setQtyValue] = useState(1);

  const plusQty=()=>{
    setQtyValue(qtyValue+1)
  }
  const minusQty=()=>{
    if(qtyValue === 1){
      setQtyValue(1)
    }else{
    setQtyValue(qtyValue-1)
    }
  }
  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        placeholder="Qty"
        min="1"
        value={qtyValue}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
        }}
        className="w-full h-[40px]  pl-2 text-[13px] font-bold focus:outline-none border border-[rgba(0,0,0,0.5)] !mt-4 rounded-md"
      />
      <div className="flex items-center !mt-4 flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l-1 border-[#000]" >
        <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-black !rounded-none" onClick={plusQty}>
          <FaAngleUp className="text-[12px] opacity-55"/>
        </Button>
         <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-black ! rounded-none"  onClick={minusQty}>
          <FaAngleDown className="text-[12px] opacity-55"/>
        </Button>
      </div>

       
    </div>
    
  );
};

export default QtyBox;
