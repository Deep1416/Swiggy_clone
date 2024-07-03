import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { catergory_data } from "../../store/catergory_data";
import { top_res } from "../../store/top_res";
import Card from "../card/Card";
const Top_res = () => {
  const [arrow, setArrow] = useState(0);

  const handleArrowLeft = () => {
    if (arrow === 0) return;
    setArrow(arrow - 1);
  };

  const handleArrowRight = () => {
    if (top_res.length - 8 === arrow) return false;
    setArrow(arrow + 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Gwalior
        </div>
        <div className="flex items-center">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={handleArrowLeft}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={handleArrowRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {top_res.map((item, idx) => {
          return <Card item={item} arrow={arrow} key={idx} />;
        })}
      </div>
      <hr className="border-[1px] my-8" />
    </div>
  );
};

export default Top_res;
