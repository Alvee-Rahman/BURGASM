import Image from "next/image";

import { Feedback } from "../components/feedback/Feedback";
export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="relative">
            <img src="./banner.jpg" alt="" className="h-[500px] w-full m-0" />
            <button
              type="button"
              className=" absolute top-[348px] start-[220px] text-black  text-[1.8rem] font-semibold px-[100px] py-2 bg-amber-500 rounded-[200px]"
            >
              Order now
            </button>
          </div>
        </section>
        <section className=" p-[100px] ">
          <div className="grid grid-cols-2 p-[50px] bg-amber-500 rounded-2xl ">
            <div className="">
              <Image
                src={"/bb.jpg"}
                width={700}
                height={700}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col ps-[60px] justify-center">
              <h1 className="text-[2rem] font-bold uppercase ">
                {" "}
                Customize your own for a big bite!
              </h1>
              <p className=" text-[20px] font-medium pe-10 py-5">
                For any celebration or just because! Receive Free 100/- Bdt cash
                back when you purchase upto 500/- bdt of your customization{" "}
              </p>
              <div className="flex space-x-6">
                {" "}
                <button className="uppercase px-[60px] rounded-md bg-slate-700 py-2 text-white font-medium text-[1.5rem]">
                  purchase now
                </button>
                <button className="uppercase  px-[60px] rounded-md border-2 border-slate-700 py-2 text-black font-medium text-[1.5rem]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="p-[100px]">
          <div className="grid grid-cols-2">
            <div>
              <Image
                src={"/chef.png"}
                width={648}
                height={600}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center ps-8">
              <h1 className="text-[2rem] pb-5 font-bold">
                "WE TAKE PRIDE IN OUR CRAFT"
              </h1>
              <p className="pe-4 font-medium">
                Our made-to-order burgers are built differently. Using our
                signature proprietary burger smasher, our culinary masters
                utilize a special smashing technique to create a mouthwatering
                caramelized, crispy sear that seals in all the juicy goodness
                within. Our passion for culinary innovation drives us to
                continuously experiment with thousands of ingredient
                combinations until we achieve the perfect recipe. We use only
                the finest, high-quality ingredients, each one meticulously
                selected for maximum flavor impact, including our custom burger
                spice blend, carefully curated to add a distinctive, bold flavor
                to every bite.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <h1 className="text-center text-[3rem] font-bold uppercase text-gray-700">
            Review our test
          </h1>
          <div className="mx-[100px]">
            <div className="  flex w-full py-[100px]   overflow-hidden overflow-x-scroll">
              <div className="flex space-x-3 ">
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
                <Feedback />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-center  text-[3rem] font-bold text-gray-700">
            Explore us in google map
          </h1>
        </section>
      </main>
    </>
  );
}
