// app/page.jsx
import BodyHead from "./components/BodyPart/BodyHead/bodyHead";
import TopCategories from "./components/categories/topCategories";
import Accreditations from "./components/Accreditations/Accreditations";
import SuccessfulCommunity from "./components/successfullCommunity/successfullCommunity";
import Features from "./components/BodyPart/Features/features";
import TieUps from "./components/TieUps/TieUps";
import ProcessChart from "./components/ProcessChart/processChart";
import ExpertConnectBanner from "./components/ExpertConnectBanner/ExpertConnectBanner";
import TrainingBanner from "./components/TrainingBanner/TrainingBanner";
import RelatedCoursesSlider from "./components/RelatedCoursesSlider/RelatedCoursesSlider";
import ChatBot from "./components/ChatBot/chatBot";
import "./css/home.css";
import HomeAboutDialog from "./components/Dialogbox/dialog";
import HomeChennaiIntroduction from "./components/HomeSections/HomeChennaiIntroduction";
import WhyInventateq from "./components/HomeSections/WhyUs";
import HomePopularCourses from "./components/HomeSections/HomePopularCourses";
import HomePlacementSupport from "./components/HomeSections/HomePlacementSupport";
import HomeAudience from "./components/HomeSections/HomeAudience";
import HomeChennaiLocations from "./components/HomeSections/HomeChennaiLocations";
import HomeWhyChennai from "./components/HomeSections/HomeWhyChennai";
import HomeTestimonials from "./components/HomeSections/HomeTestimonials";
import HomeFAQ from "./components/HomeSections/HomeFAQ";
import Head from "./Head"
import CertificationSection from "./components/CertificationSection/CertificationSection";

export default function Home() {
  return (
    <div className="home-container">
      <Head/>
      <main className="home-content">
        
        <HomeAboutDialog/>
        <BodyHead />
        <TrainingBanner />
        <br/>
        <TopCategories />
        <HomeChennaiIntroduction />
                <br></br>

        <Accreditations />
        <WhyInventateq/>
        <HomePopularCourses />
        <ProcessChart />
        <HomePlacementSupport />
                    <TieUps />
                    <HomeAudience />
                    <HomeChennaiLocations />
                    <HomeWhyChennai />
        <HomeTestimonials />
        <HomeFAQ />

     
                 <CertificationSection />

      </main>

      <ChatBot />
    </div>
  );
}
