// app/page.jsx
import BodyHead from "./components/BodyPart/BodyHead/bodyHead";
import HomeAbout from "./components/BodyPart/HomeAbout/homeAbout";
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

// ✅ This replaces your SEO component
export const metadata = {
  title: "Best Online Courses - Learn from Top-Rated Instructors",
  description:
    "Join the best online institute offering top-rated courses in programming, design, marketing, data science, and more. Learn at your own pace with expert instructors and get certified to boost your career today!",
  keywords: ["online courses", "programming", "design", "marketing"],
};
console.log('HomeAboutDialog imported:', HomeAboutDialog);

export default function Home() {
  return (
    <div className="home-container">

      <main className="home-content">
                      <HomeAboutDialog/>

        <BodyHead />
        <HomeAbout />
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
