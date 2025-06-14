import React from "react";
import '../Search/style.css'
import { Button } from "@mui/material";
const Search = () => {
  return (
    <div className="serachBox w-[100%] h-[40px] bg-white rounded-md flex relative">
      <input
        type="text"
        placeholder="Search QuickCart.com"
        className="w-[90%] pl-5 h-[38px] focus:outline-none"
      />
      <Button variant="contained" sx={{background:'#febd69', color:'black'}}>Search</Button>
      
    </div>
  );
};

export default Search;
