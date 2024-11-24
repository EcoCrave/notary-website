import Banner from "./Components/Home/Banner";
import Banner1 from "./Components/Home/Banner1";
import FAQSection from "./Components/Home/FAQSection";
import HowItWorks from "./Components/Home/HowItWorks";
import InternationalServices from "./Components/Home/InternationalServices";
import PriceBox from "./Components/Home/PriceBox";
import TestimonialsSlider from "./Components/Home/TestimonialsSlider";

import UseCases from "./Components/Home/UseCases";
import YourAdvantages from "./Components/Home/YourAdvantages";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <Banner1 />
      <YourAdvantages />
      <PriceBox />
      <InternationalServices />
      <UseCases />
      <TestimonialsSlider />
      <HowItWorks />
      <FAQSection />
    </div>
  );
}
