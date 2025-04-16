import BusinessBanner from "../Components/Business/BusinessBanner";
import FAQbusiness from "../Components/Business/FAQbusiness";
import ReachSignature from "../Components/Business/ReachSignature";
import ReadyToGo from "../Components/Business/ReadyToGo";
import Service from "../Components/Business/Service";
import WorryFreeBusiness from "../Components/Business/WorryFreeBusiness";
import Banner1 from "../Components/Home/Banner1";
export const metadata = {
  title: "Business Documents for Smooth Operations & Growth",
  description:
    "Business documents streamline operations, support legal compliance, enhance communication, and drive strategic planning across all departments effectively.",
};

const BusinessService = () => {
  return (
    <div>
      <BusinessBanner />
      <Banner1 />
      <WorryFreeBusiness />
      <Service />
      <ReachSignature />
      <ReadyToGo />
      <FAQbusiness />
    </div>
  );
};

export default BusinessService;
