import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IoIosClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import "../style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegSquareMinus } from "react-icons/fa6";

const SideBar = ({ isOpenSideBar, closeSideBar }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categories ">
      {" "}
      <h3 className="p-4 text-[15px] uppercase font-black flex justify-center">
        Shop By Categories{" "}
        <IoIosClose
          className=" !ml-4 cursor-pointer text-red-900 text-[25px]"
          onClick={closeSideBar}
        />
      </h3>
      <Divider />
      <div className="scroll">
        <ul className=" w-full">
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full text-left !text-[18px] !justify-start !text-black !px-2 ">
                FAshion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[100%] left-[0] w-full pl-3">
                <li className="list-none relative !mb-2">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-left !text-[15px] !justify-start !text-black !px-2 ">
                      Mens Ware
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0] w-full pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Jeans Pants
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          T-shirt
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Shirt
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
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
