import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const CategoryCollapse = () => {
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
  return (
    <>
         <div className="scroll">
        <ul className=" w-full">
          <li className="list-none flex items-center relative flex-col">
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
              <ul className="submenu   w-full pl-3">
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
                    <ul className="inner_submenu w-full pl-3">
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

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full text-left !text-[18px] !justify-start !text-black !px-2 ">
                FAshion
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative !mb-2">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-left !text-[15px] !justify-start !text-black !px-2 ">
                      Mens Ware
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu  w-full pl-3">
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

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full text-left !text-[18px] !justify-start !text-black !px-2 ">
                FAshion
              </Button>
            </Link>
            {submenuIndex === 2 ? (
              <FaRegSquareMinus
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative !mb-2">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-left !text-[15px] !justify-start !text-black !px-2 ">
                      Mens Ware
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 2 ? (
                    <FaRegSquareMinus
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute cursor-pointer text-[18px] top-[12px] right-[15px]"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                  {innerSubmenuIndex === 2 && (
                    <ul className="inner_submenu  w-full pl-3">
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
    </>
  )
}

export default CategoryCollapse