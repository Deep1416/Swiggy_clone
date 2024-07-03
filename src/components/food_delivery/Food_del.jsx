import React from 'react'
import { top_res } from '../../store/top_res';
import Card from '../card/Card';

const Food_del = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-bold">
        Restaurants with online food delivery in Gwalior
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {top_res.map((item, idx) => {
          return <Card item={item}  key={idx} />;
        })}
      </div>
      <hr className="border-[1px] my-4" />
    </div>
  );
}

export default Food_del