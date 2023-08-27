import React from "react";
import Image from "next/image";
import TopSellerDemo from "@/assets/demoTopSeller.svg";
const TopSeller = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold">Top Seller</h1>
      <div className="grid lg:grid-cols-9 md:grid-cols-4 sm:grid-cols-2">
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-32 ">
          <Image
            src={TopSellerDemo}
            alt="seller"
            width={100}
            className="rounded-3xl"
          />
          <p className="flex flex-col mt-4 text-center">
            <span className="text-lg font-bold">Crispin Berry</span>
            <span className="text-base font-normal">214 ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
