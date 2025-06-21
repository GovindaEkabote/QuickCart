import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IoIosClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";

const SideBar = ({ isOpenSideBar, closeSideBar }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      
        {" "}
        <h3 className="p-4 text-[15px] uppercase font-black flex justify-center">
          Shop By Categories{" "} <IoIosClose  className=" !ml-4 cursor-pointer text-red-900 text-[25px]" onClick={closeSideBar}/>
        </h3>
     
      <Divider />

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full text-left !text-[18px] !justify-start !text-black !px-2 ">FAshion</Button>
            <FaRegPlusSquare className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]" />

            <ul>
              
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenSideBar} onClose={closeSideBar}>
      {DrawerList}
    </Drawer>
  );
};

export default SideBar;
