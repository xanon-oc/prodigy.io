import Banner from "@/components/Banner";
import "keen-slider/keen-slider.min.css";
import LiveAuction from "@/components/LiveAuction";
import TopSeller from "@/components/TopSeller";
import TodaysPicks from "@/components/TodaysPicks";

export default function Home() {
  return (
    <div className="container  text-white">
      <Banner />
      <LiveAuction />
      <TopSeller />
      <TodaysPicks />
    </div>
  );
}
