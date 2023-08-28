import React from "react";
import DemoCardPic from "@/assets/demo-card.png";
import Image from "next/image";
import DemoUserPic from "@/assets/userDemo.svg";
const ProductCard = () => {
  return (
    <div className="auction-card mt-9">
      <div className="flex justify-evenly p-4">
        <Image src={DemoCardPic} alt="Cards" width={290} height={290} />
      </div>
      <div className="">
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <p>Hamlet Contemplates</p>
          <p className="badge badge-primary p-3">BSC</p>
        </div>
        <div className="grid grid-cols-2 p-4 mt-3">
          <div className="flex gap-3 items-center w-[85%] mx-auto ">
            <Image
              src={DemoUserPic}
              alt="user"
              width={52}
              height={52}
              className="rounded-xl"
            />

            <p className="flex flex-col">
              <span className="text-[#8A8AA0] font-normal text-sm">
                Creator
              </span>
              <span>SalvadorDali</span>
            </p>
          </div>
          <div className="flex justify-end pr-4">
            <p className="flex flex-col">
              <span className="text-[#8A8AA0] font-normal text-sm">
                Current Bid
              </span>
              <span>4.89 ETH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
