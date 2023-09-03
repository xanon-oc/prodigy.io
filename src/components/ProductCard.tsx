import React from "react";
import DemoCardPic from "@/assets/demo-card.png";
import Image from "next/image";
import DemoUserPic from "@/assets/userDemo.svg";
import Demo from "./Demo";
const ProductCard = () => {
  return (
    <div className="card w-full h-full auction-card">
      <figure className="px-4 pt-8">
        <Image src={DemoCardPic} alt="Cards" width={250} height={200} />
      </figure>
      <div className="p-8 items-center text-center">
        <div className="card-title text-start mb-2">
          <span>Hamlet Contemplates</span>
          <span className="badge badge-primary p-3">BSC</span>
        </div>
        <div className="mt-2">
          <div className="mt-1 flex justify-between text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <Image
                src={DemoUserPic}
                alt="user"
                width={52}
                height={52}
                className="rounded-xl"
              />
              <div className="flex flex-col text-start mt-1.5 sm:mt-0">
                <span className="text-[#8A8AA0] font-normal text-sm">
                  Creator
                </span>
                <span>SalvadorDali</span>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="flex flex-col text-start mt-1.5 sm:mt-0">
                <span className="text-[#8A8AA0] font-normal text-sm">
                  Current Bid
                </span>
                <span>4.89 ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
