import BusinessBanner from "../Components/Business/BusinessBanner";
import ReachSignature from "../Components/Business/ReachSignature";
import ReadyToGo from "../Components/Business/ReadyToGo";
import Service from "../Components/Business/Service";
import WorryFreeBusiness from "../Components/Business/WorryFreeBusiness";
import Banner1 from "../Components/Home/Banner1";
import FAQSection from "../Components/Home/FAQSection";

const BusinessService = () => {
  return (
    <div>
      <BusinessBanner />
      <Banner1 />
      <WorryFreeBusiness />
      <Service />
      <ReachSignature />
      <ReadyToGo />
      <FAQSection />
    </div>
  );
};

export default BusinessService;
