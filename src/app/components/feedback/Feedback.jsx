import React from "react";
import { FaStar } from "react-icons/fa";
export const Feedback = () => {
  return (
    <>
      <div className="flex flex-col w-[400px] h-auto border-2 p-2 rounded-lg shadow-lg shadow-gray-600">
        <h1 className="text-center font-bold">Md Abdullah</h1>
        <p className="text-center font-light">student</p>
        <div className="flex space-x-2 justify-center py-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          dignissimos culpa beatae ad voluptatibus odio sit vero, omnis qui eum
          deleniti facere excepturi at sint aliquid corporis nesciunt sapiente
          consequuntur?
        </p>
      </div>
    </>
  );
};
