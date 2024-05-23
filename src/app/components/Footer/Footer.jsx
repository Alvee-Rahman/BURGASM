import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
      <footer className=" h-[500px] bg-amber-600 mt-[200px]">
        <div className="grid grid-cols-12">
          <div className=" col-span-3">
            <img src={"/logo.png"} alt="logo" className="h-[500px] w-[600px]" />
          </div>
          <div className="col-span-9">
            <div className="flex flex-col">
              <div className="grid grid-cols-3">
                <div>
                  <h1 className="text-[1.2rem] font-bold text-center pt-16">
                    Contact
                  </h1>
                  <div className=" flex flex-col">
                    <div className="flex items-center ps-[100px] font-semibold">
                      <MdEmail className="text-[2rem] text-zinc-800" />
                      <p className="text-center">burgasm@gmail.com</p>
                    </div>
                    <div className="flex items-center ps-[100px] font-semibold">
                      <FaLocationDot className="text-[2rem] text-zinc-800" />
                      <p className="text-center">Mirpur 6, Dhaka-1207</p>
                    </div>
                    <h1 className="text-[1.2rem] font-bold text-center pt-4 ">
                      Follow us
                    </h1>
                    <div className="flex justify-between px-[70px] pt-6">
                      <Link href={"http://www.facebook.com"}>
                        <FaFacebook className="text-[3rem] text-zinc-800" />
                      </Link>
                      <Link href={"http://www.twitter.com"}>
                        <FaTwitter className="text-[3rem] text-zinc-800" />
                      </Link>
                      <Link href={"http://www.instagram.com"}>
                        <PiInstagramLogoFill className="text-[3rem] text-zinc-800" />
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <img src="./playstore.png" alt="" width={"300"} />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[1.2rem] font-bold text-center pt-16">
                    Links
                  </h1>
                  <ul className="text-center font-semibold space-y-2 pt-4 ">
                    <li>
                      <Link href={"/"}>home</Link>
                    </li>
                    <li>
                      <Link href={"/About us"}>About us</Link>
                    </li>
                    <li>
                      <Link href={"/Orders"}>Orders</Link>
                    </li>
                    <li>
                      <Link href={"/Careers"}>Careers</Link>
                    </li>
                    <li>
                      <Link href={"/login"}>Log in</Link>
                    </li>
                    <li>
                      <Link href={"/signup"}>sign up</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[1.2rem] font-bold text-center pt-16 ">
                    Newsattlers
                  </h1>
                  <div className="flex justify-center pt-6">
                    <input
                      type="text"
                      className="h-[48px] px-1 "
                      placeholder="@username"
                    />
                    <button className="bg-red-800 px-6 py-3 text-white">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-center px-8 pt-4 font-light leading-tight ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos provident illo ut aliquid hic vero incidunt.
                    Quisquam consectetur veritatis qui iusto totam, soluta
                    quibusdam dignissimos exercitationem distinctio rerum
                    voluptas doloribus.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
