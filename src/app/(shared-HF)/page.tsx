import Banner from "@/components/Banner";
import "@/styles/Banner.css";
import "keen-slider/keen-slider.min.css";
import LiveAuction from "@/components/LiveAuction";
import TopSeller from "@/components/TopSeller";

export default function Home() {
  return (
    <div className="text-white container mx-auto">
      <Banner />
      <LiveAuction />
      <TopSeller />
    </div>
  );
}
