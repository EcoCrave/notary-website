import Banner from "./Components/Home/Banner";
import Banner1 from "./Components/Home/Banner1";
import Digitalization from "./Components/Home/Digitalization";
import FAQSection from "./Components/Home/FAQSection";
import HowItWorks from "./Components/Home/HowItWorks";
import InternationalServices from "./Components/Home/InternationalServices";
import PopularDocuments from "./Components/Home/PopularDocuments";
import ScrollCarosel from "./Components/Home/ScrollCarosel";
import UseCases from "./Components/Home/UseCases";
import YourAdvantages from "./Components/Home/YourAdvantages";
import PdfEditor from "./Components/PdfEditor/PdfEditor";
import PdfViewer from "./Components/PdfEditor/PdfViewer";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <Banner1 />
      <YourAdvantages />
      <InternationalServices />
      <UseCases />
      <Digitalization />
      {/* <ScrollCarosel /> */}
      {/* <PdfViewer /> */}
      {/* <PdfEditor /> */}
      {/* <PopularDocuments /> */}
      <HowItWorks />
      <FAQSection />
    </div>
  );
}
