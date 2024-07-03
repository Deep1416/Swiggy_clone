import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const link = [
    {
      icon: <FiSearch />,
      name: "Search",
      
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup :"New"
    },
    {
      icon: <IoMdHelpCircle />,
      name: "Help",
    },

    {
      icon: <FaRegUserCircle /> ,
      name: "Sign In",
    },
    {
      icon: <CgShoppingBag />,
      name: "Cart",
      sup : 0
    },
  ];

  return (
    <>
      <div
        className="black-overlay h-full w-full fixed duration-500 "
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[350px] bg-white h-full absolute duration-700"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          <div
            onClick={() => setToggle(false)}
            className="flex justify-end p-5 cursor-pointer "
          >
            <RxCross2 className="text-3xl" />
          </div>
        </div>
      </div>
      <header className="p-3 shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-16">
            <img src="images/logo.png" className="w-full" alt="Swiggy Logo" />
          </div>
          <div className="">
            <span
              className="font-bold underline underline-offset-4"
              style={{
                textDecorationColor: "orange",
                textDecorationThickness: "2px",
              }}
            >
              Madhav Ganj Gwalior
            </span>
            , Madhya Pradesh 474001{" "}
            <IoIosArrowDown
              fontSize={20}
              className="inline text-[#fc8019] cursor-pointer "
              onClick={() => setToggle(true)}
            />
          </div>
          <nav className=" ml-auto  font-semibold text-[18px]">
           <ul className="flex list-none gap-5 items-center">
           {link.map((li, idx) => {
              return (
                <li key={idx} className="flex items-center gap-1 hover:text-[#fc8019] cursor-pointer">
                  {" "}
                  {li.icon} <span>{li.name}</span>
                  <sup className="text-orange-600">{li.sup}</sup>
                </li>
              );
            })}
           </ul>

            
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
