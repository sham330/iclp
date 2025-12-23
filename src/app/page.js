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
import NewAbout from "./components/BodyPart/HomeAbout/NewAbout";

// ✅ This replaces your SEO component
export const metadata = {
  title: "Online Software Courses | Online Courses Certificate | Online Courses Training - ICLP",
  description:
    "Explore online software courses with certification & expert training. Boost your career with flexible learning. Enroll now to get started!",
  keywords: ["online courses", "programming", "design", "marketing"],
};

export default function Home() {
  return (
    <div className="home-container">
      <main className="home-content">
        <HomeAboutDialog/>
        <BodyHead />
        <br/>
        <NewAbout/>
        <TopCategories />
                <br></br>

        <Accreditations />
        <SuccessfulCommunity />
        <Features />
         <br></br>
        <br></br>
       
        <TieUps />
        <Booking />
        <ProcessChart />
        <ExpertConnectBanner />
        <RelatedCoursesSlider />
      </main>

      <ChatBot />
    </div>
  );
}
