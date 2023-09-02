import Banner from "@/components/Banner";
import "keen-slider/keen-slider.min.css";
import TopSeller from "@/components/TopSeller";
import TodaysPicks from "@/components/TodaysPicks";
import ShortDescription from "@/components/ShortDescription";
import PartnerSection from "@/components/PartnerSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="container  text-white">
      <Banner />
      <ShortDescription />
      <TopSeller />
      <TodaysPicks />
      <PartnerSection />
      <CallToAction />
    </div>
  );
}
