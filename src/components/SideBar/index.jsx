import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./index.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenCategoryFilter, setIsopenCategoryFilter] = useState(true);
  const [isOpenAvailibilityFilter, setIsopenAvailibilityFilter] =
    useState(true);
  const [isOpenSizeFilter, setIsopenSizeFilter] = useState(true);
  const [isOpenColorFilter, setIsopenColorFilter] = useState(true);
  const [isOpenRatingFilter, setIsopenRatingFilter] = useState(true);

  return (
    <aside className="sidebar py-5 shadow p-2">
      <div className="box">
        <h3 className="uppercase !w-full !mb-3 text-[16px] font-[600] flex pr-3 items-center">
          Product categories
          <Button
            className="! w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsopenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? (
              <FaAngleDown className="text-black text-[20px]" />
            ) : (
              <FaAngleUp className="text-black text-[20px]" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <hr className="bg-gray-300 h-0.5 !mb-4   border-0" />
          <div className="scroll px-4 relative -left-[10px]">
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
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mobile"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Laptop"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Computer"
              className="w-full uppercase "
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="uppercase !w-full !mb-3 text-[16px] font-[600] flex pr-3 items-center">
          Availibility
          <Button
            className="! w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() =>
              setIsopenAvailibilityFilter(!isOpenAvailibilityFilter)
            }
          >
            {isOpenAvailibilityFilter === true ? (
              <FaAngleDown className="text-black text-[20px]" />
            ) : (
              <FaAngleUp className="text-black text-[20px]" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailibilityFilter}>
          <hr className="bg-gray-300 h-0.5 !mb-4   border-0" />
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (20)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (5)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (1)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Featured"
              className="w-full uppercase "
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="uppercase !w-full !mb-3 text-[16px] font-[600] flex pr-3 items-center">
          Brand / Company
          <Button
            className="! w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsopenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? (
              <FaAngleDown className="text-black text-[20px]" />
            ) : (
              <FaAngleUp className="text-black text-[20px]" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <hr className="bg-gray-300 h-0.5 !mb-4   border-0" />
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="HP (20)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Apple (5)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="WNS (1)"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Asus"
              className="w-full uppercase "
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="uppercase !w-full !mb-3 text-[16px] font-[600] flex pr-3 items-center">
          Color
          <Button
            className="! w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsopenColorFilter(!isOpenColorFilter)}
          >
            {isOpenColorFilter === true ? (
              <FaAngleDown className="text-black text-[20px]" />
            ) : (
              <FaAngleUp className="text-black text-[20px]" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenColorFilter}>
          <hr className="bg-gray-300 h-0.5 !mb-4   border-0" />
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Black"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Pink"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="silver"
              className="w-full uppercase "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Rose gold"
              className="w-full uppercase "
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mt-5">
        <h3 className="uppercase !w-full !mb-3 text-[16px] font-[600] flex pr-3 items-center">
          Filter By Price
        </h3>
        <RangeSlider className="" />
        <div className="flex pt-2 pb-2 justify-between">
          <span className="text-[13px] ml-auto">
            From: <strong className="text-dark">RS: {100}</strong>
          </span>
          <span className=" text-[13px]">
            From: <strong className="text-dark">RS: {5000}</strong>
          </span>
        </div>
      </div>

      <div className="box !mt-5 ">
       <h3 className="uppercase !w-full !mb-1 text-[16px] font-[600] flex pr-3 items-center">
          Filter By Rating
          <Button
            className="! w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() =>
              setIsopenRatingFilter(!isOpenRatingFilter)
            }
          >
            {isOpenRatingFilter === true ? (
              <FaAngleDown className="text-black text-[20px]" />
            ) : (
              <FaAngleUp className="text-black text-[20px]" />
            )}
          </Button>
        </h3>
         <Collapse isOpened={isOpenRatingFilter}>
        <Rating
        name="half-rating"
        defaultValue={5}
        precision={0.5}
        readOnly
        size="medium"
        className="cursor-pointer !w-full"
      />
       <Rating
        name="half-rating"
        defaultValue={4}
        precision={0.5}
        readOnly
        size="medium"
        className="cursor-pointer !w-full"
      />
       <Rating
        name="half-rating"
        defaultValue={3.5}
        precision={0.5}
        readOnly
        size="medium"
        className="cursor-pointer !w-full"
      />
       <Rating
        name="half-rating"
        defaultValue={2.6}
        precision={0.5}
        readOnly
        size="medium"
        className="cursor-pointer !w-full"
      />
       <Rating
        name="half-rating"
        defaultValue={1.5}
        precision={0.5}
        readOnly
        size="medium"
        className="cursor-pointer !w-full"
      />
      </Collapse>
      </div>


    </aside>
  );
};

export default SideBar;
