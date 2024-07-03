import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { catergory_data } from "../../store/catergory_data";

const Category = () => {
  const [arrow, setArrow] = useState(0);

  const handleArrowLeft = () => {
    if (arrow === 0) return;
    setArrow(arrow - 1);
  };

  const handleArrowRight = () => {
    if(catergory_data.length - 8 === arrow) return false
    setArrow(arrow + 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-bold">What's on your mind?</div>
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
      <div className="flex overflow-hidden">
        {catergory_data.map((item, idx) => (
          <div
            key={idx}
            className="w-[150px] shrink-0 duration-500"
            style={{ transform: `translateX(-${arrow * 100}%)` }}
          >
            <img src={item.image} alt={item.name} />
            {/* <div>{item.path}</div> */}
          </div>
        ))}
      </div>
      <hr className="border-[1px] my-4" />
    </div>
  );
};

export default Category;
