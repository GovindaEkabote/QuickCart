import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SideBar = () => {
  return (
    <aside className="sidebar py-5 shadow p-2">
      <div className="box">
        <h3 className="uppercase !mb-3 text-[16px] font-[600]">
          Product categories
        </h3>
        <hr className="bg-gray-300 h-0.5 border-0" />
        <div className="scroll ">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Fashion"
            className="w-full uppercase "
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Electronic"
            className="w-full uppercase "
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Footware"
            className="w-full uppercase "
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Books"
            className="w-full uppercase "
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Jewellery"
            className="w-full uppercase "
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Groceries"
            className="w-full uppercase "
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
