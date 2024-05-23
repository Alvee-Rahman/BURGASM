import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-2 px-[100px] bg-slate-900 text-white ">
        <div className="flex ">
          <Image
            src="/logo.png"
            alt="burgasm logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="flex items-center justify-end ">
          <ul className="flex  space-x-10 font-bold text-[20px] pe-3">
            <li></li>
            <li>
              {" "}
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/favourites"}>Favourites</Link>
            </li>
            <li>
              <Link href={"/login"}>Login </Link>
            </li>
            <li>
              <Link href={"/signup"}>Signup</Link>
            </li>
            <li className="flex items-center justify-center">
              <Link href={"/cart"} className="text-[2rem] ">
                <RiShoppingCart2Fill />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
