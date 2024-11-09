import Banner from "./Components/Home/Banner";
import Banner1 from "./Components/Home/Banner1";
import Digitalization from "./Components/Home/Digitalization";
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
      {/* <Digitalization /> */}
      <UseCases />
      <ScrollCarosel />
      {/* <PdfViewer /> */}
      <PdfEditor />
    </div>
  );
}
