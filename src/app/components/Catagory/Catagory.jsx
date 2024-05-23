"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Burgeritems } from "../Burgeritems/Burgeritems";
import { Pizzaitem } from "../Pizzaitem/Pizzaitem";
import { Setmenuitem } from "../Setmenuitem/Setmenuitem";
import { Drinkitems } from "../Drinksitem/Drinkitems";
import { Friesitem } from "../Friesitem/Friesitem";
import { Kababitem } from "../Kababitems/Kababitem";

export const Catagory = () => {
  const [catagory, setCatagory] = useState(0);

  const catagories = [
    <Burgeritems />,
    <Pizzaitem />,
    <Setmenuitem />,
    <Drinkitems />,
    <Friesitem />,
    <Kababitem />,
  ];
  const handlebutton = (index) => {
    setCatagory(index);
  };
  return (
    <>
      <section>
        <h1 className="text-[1.7rem] text-center font-bold mt-[40px] text-gray-600">
          Enjoy Our Yummy Food, categorized Just for You!
        </h1>
        <div className={`flex justify-center mt-6 space-x-[50px]`}>
          <div
            className={`${
              catagory == 0 ? " border-b-2 border-red-900 " : "border-none"
            }`}
          >
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900 bg-zinc-800"
              onClick={() => handlebutton(0)}
            >
              <Image
                src={"/cb.png"}
                width={100}
                height={100}
                className="rounded-full"
              />
            </button>
            <p className="text-center font-bold">burger</p>
          </div>
          <div
            className={`${
              catagory == 1 ? " border-b-2 border-red-900 " : " border-none "
            }`}
          >
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900  bg-zinc-800"
              onClick={() => handlebutton(1)}
            >
              <Image src={"/pizza.png"} width={100} height={100} />
            </button>

            <p className="text-center font-bold">Pizza</p>
          </div>
          <div
            className={`${
              catagory == 2 ? " border-b-2 border-red-900 " : " border-none "
            }`}
          >
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900  bg-zinc-800"
              onClick={() => handlebutton(2)}
            >
              <Image
                src={"/setmenu.png"}
                width={100}
                height={100}
                className="p-2 rounded-full"
              />
            </button>
            <p className="text-center font-bold"> SetMenu</p>
          </div>
          <div
            className={`${
              catagory == 3 ? " border-b-2 border-red-900 " : "border-none"
            }`}
          >
            {" "}
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900  bg-zinc-800"
              onClick={() => handlebutton(3)}
            >
              <Image
                src={"/shake.jpg"}
                width={100}
                height={100}
                className="p-3 rounded-full"
              />
            </button>
            <p className="text-center font-bold">Shakes & drinks</p>
          </div>
          <div
            className={`${
              catagory == 4 ? " border-b-2 border-red-900 " : "border-none"
            }`}
          >
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900  bg-zinc-800"
              onClick={() => handlebutton(4)}
            >
              <Image
                src={"/starter.png"}
                width={100}
                height={100}
                className="p-2 rounded-full"
              />
            </button>
            <p className="text-center font-bold">Hot Fries</p>
          </div>
          <div
            className={`${
              catagory == 5 ? " border-b-2 border-red-900 " : "border-none"
            }`}
          >
            <button
              className="border-[2px] border-amber-500 rounded-full h-[100px] w-[100px] shadow-lg shadow-zinc-900  bg-zinc-800"
              onClick={() => handlebutton(5)}
            >
              <Image
                src={"/steak.jpg"}
                width={700}
                height={700}
                className="p-3 rounded-full"
              />
            </button>
            <p className="text-center font-bold">Steak</p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[100px]">{catagories[catagory]}</div>
      </section>
    </>
  );
};
