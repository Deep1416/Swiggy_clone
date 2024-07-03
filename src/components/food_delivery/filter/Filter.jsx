import React from "react";

const Filter = () => {
  const data = [
    {
      name: "Filter",
      icon: "",
    },
    { name: "Sort By", icon: "" },
    { name: "Fast Delivery" },
    { name: "New on Swiggy" },
    { name: "Ratings 4.0+" },
    { name: "Pure Veg" },
    { name: "Offers" },
    { name: "Rs. 300-Rs. 600" },
    { name: "Less than Rs. 300" },
  ];

  return (
    <div className="flex justify-evenly">
      {data.map((item, idx) => {
        return (
          <div className="border border-black rounded-2xl px-6 py-2">
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
