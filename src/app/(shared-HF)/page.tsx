"use client";
import Banner from "@/components/Banner";
import LiveAuction from "@/components/LiveAuction";
import "@/styles/Banner.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import LiveAuctionCard from "@/components/LiveAuctionCard";
export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  return (
    <div className="text-white container mx-auto">
      <Banner />
      {/* <LiveAuction /> */}
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
    </div>
  );
}
