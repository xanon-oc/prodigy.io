import React from "react";
import ProductCard from "./ProductCard";

const TodaysPicks = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Best Picks Of The Day</h1>
        <p
          className="cursor-pointer text-base font-bold
         uppercase  custom-underline"
        >
          Explore more
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="text-center mt-10">
        <button className="btn rounded-3xl bg-inherit border-white hover:bg-green-400 hover:text-black">
          Load More
        </button>
      </div>
    </div>
  );
};

export default TodaysPicks;
