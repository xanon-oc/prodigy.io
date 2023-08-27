"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import LiveAuctionCard from "@/components/LiveAuctionCard";
import NavDemo from "@/assets/navigation-arrow.svg";
import Image from "next/image";
const LiveAuction = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold">Live Auction</h1>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide">
          <LiveAuctionCard />
        </div>
        <div className="keen-slider__slide">
          <LiveAuctionCard />
        </div>
        <div className="keen-slider__slide">
          <LiveAuctionCard />
        </div>
        <div className="keen-slider__slide">
          <LiveAuctionCard />
        </div>
        <div className="keen-slider__slide">
          <LiveAuctionCard />
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-8 cursor-pointer">
        <Image src={NavDemo} alt="Demo" width={300} />
      </div>
    </div>
  );
};

export default LiveAuction;
