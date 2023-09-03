import Image from "next/image";
import React from "react";

import DemoCardPic from "@/assets/demo-card.png";

import DemoUserPic from "@/assets/userDemo.svg";

const Demo = () => {
  return (
    <div className="mt-2">
      <div className="mt-6 flex items-center gap-8 text-xs">
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <Image
            src={DemoUserPic}
            alt="user"
            width={52}
            height={52}
            className="rounded-xl"
          />
          <div className="flex flex-col text-start mt-1.5 sm:mt-0">
            <span className="text-[#8A8AA0] font-normal text-sm">Creator</span>
            <span>SalvadorDali</span>
          </div>
        </div>

        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <svg
            className="h-4 w-4 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>

          <div className="flex flex-col text-start mt-1.5 sm:mt-0">
            <span className="text-[#8A8AA0] font-normal text-sm">
              Current Bid
            </span>
            <span>4.89 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
