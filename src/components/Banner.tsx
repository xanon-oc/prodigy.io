import React from "react";
import Image from "next/image";
import Model1 from "@/assets/banner-model1.svg";
import BgGraphic1 from "@/assets/bgGraphic.svg";

const Banner = () => {
  return (
    <div className="max-h-screen">
      <div className="">
        <Image
          src={BgGraphic1}
          alt="background graphics"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-around mt-28 ">
        <div className="text-start z-0 mt-20">
          <h2 className="text-[56px] font-bold leading-[68px]">
            Discover, find,
          </h2>
          <h2 className="text-[56px] font-bold leading-[68px]">
            Sell extraordinary
          </h2>
          <h2 className="text-[56px] font-bold leading-[68px]">Monster NFTs</h2>
          <p className="text-xl font-normal mt-3 mb-3">
            Marketplace for monster character cllections non fungible token NFTs
          </p>
          <div className="flex gap-6 mt-6">
            <button className="btn rounded-3xl text-white bg-inherit border-[#5142FC] hover:bg-green-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              Explore
            </button>
            <button className="btn rounded-3xl bg-white text-black hover:bg-green-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              Create
            </button>
          </div>
        </div>
        <div className="z-0 ml-[12rem] mt-[-50px]">
          <Image src={Model1} alt="Model" width={354} height={588} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
