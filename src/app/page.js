// app/page.jsx
import BodyHead from "./components/BodyPart/BodyHead/bodyHead";
import TopCategories from "./components/categories/topCategories";
import Accreditations from "./components/Accreditations/Accreditations";
import SuccessfulCommunity from "./components/successfullCommunity/successfullCommunity";
import Features from "./components/BodyPart/Features/features";
import TieUps from "./components/TieUps/TieUps";
import Booking from "./components/Booking/booking";
import ProcessChart from "./components/ProcessChart/processChart";
import ExpertConnectBanner from "./components/ExpertConnectBanner/ExpertConnectBanner";
import RelatedCoursesSlider from "./components/RelatedCoursesSlider/RelatedCoursesSlider";
import ChatBot from "./components/ChatBot/chatBot";
import "./css/home.css";
import HomeAboutDialog from "./components/Dialogbox/dialog";
import WhyInventateq from "./components/HomeSections/WhyUs";
import ServiceAreas from "./components/Services";
import Head from "./Head"

export default function Home() {
  return (
    <div className="home-container">
      <Head/>
      <main className="home-content">
        
        <HomeAboutDialog/>
        <BodyHead />
        <br/>
        <TopCategories />
                <br></br>

        <Accreditations />
        <WhyInventateq/>
        {/* <SuccessfulCommunity /> */}
        <Features />
         <br></br>
        <br></br>
       
        <TieUps />
        <Booking />
        <ProcessChart />
        <br></br>
        <ServiceAreas/>
        <br></br>
        <ExpertConnectBanner />
        <RelatedCoursesSlider />
      </main>

      <ChatBot />
    </div>
  );
}
