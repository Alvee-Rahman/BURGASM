import React from "react";
import { MenuItem } from "../MenuItem/MenuItem";

export const Burgeritems = () => {
  return (
    <>
      <section>
        <h1 className="text-[2rem] font-bold mt-[50px] text-gray-600">
          <span className="text-amber-600">Popular</span> Choice
        </h1>
        <hr className="h-[3px] w-[120px] bg-red-500" />
        <div className="mt-[50px] flex overflow-hidden overflow-x-scroll p-5">
          <div className="flex  space-x-6">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[2rem] font-bold mt-[50px] text-gray-600">
          <span className="text-amber-600">Chicken</span> Burger
        </h1>
        <hr className="h-[3px] w-[120px] bg-red-500" />
        <div className="mt-[50px] flex overflow-hidden overflow-x-scroll p-5">
          <div className="flex  space-x-6">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[2rem] font-bold mt-[50px] text-gray-600">
          <span className="text-amber-600">Beef</span> Burger
        </h1>
        <hr className="h-[3px] w-[120px] bg-red-500" />
        <div className="mt-[50px] flex overflow-hidden overflow-x-scroll p-5">
          <div className="flex  space-x-6">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[2rem] font-bold mt-[50px] text-gray-600">
          <span className="text-amber-600">Gourmet</span> Burger
        </h1>
        <hr className="h-[3px] w-[120px] bg-red-500" />
        <div className="mt-[50px] flex overflow-hidden overflow-x-scroll p-5">
          <div className="flex  space-x-6">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </section>
      s
    </>
  );
};
