import React from "react";

export const MenuItem = () => {
  return (
    <>
      <div className="p-3   border-t-[1px] border-zinc-500  shadow-md shadow-zinc-700 w-[300px]  h-[400px] rounded-md bg-white ">
        <div className="flex-col relative ">
          <div className="">
            <img
              src={"/burger.jpg"}
              alt=""
              height={"300"}
              width={"300"}
              className="rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold pt-2 text-center text-[1rem] text-black">
              SMOKEY BBQ WITH CHEESE CHICKEN
            </h2>
            <p className="text-center text- text-[14px] font-semibold text-green-900">
              chicken petty cooked with bbq souce
            </p>
            <h3 className="start-[80px] text-[1.5rem] font-bold absolute">
              180 taka/-
            </h3>
          </div>
          <div className="grid grid-cols-2 absolute w-[274px] top-[330px] ">
            <div className="flex justify-around bg-amber-500 rounded-s-md">
              <button className=" px-4 py-2 font-bold text-[1.5rem] text-white">
                +
              </button>
              <span className="text-[1.5rem] font-bold px-4 py-2 ">1</span>
              <button className=" px-4 py-2 font-bold text-[1.5rem] text-white">
                -
              </button>
            </div>
            <div className="flex justify-center items-center bg-red-700 text-white font-bold rounded-e-md">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
