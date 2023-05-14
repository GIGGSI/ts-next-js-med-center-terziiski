import Header from "./components/Home/Header/Header";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Services from "./components/Home/Services/Services";
import OurTeamSlider from "./components/Home/OurTeam/OurTeamSlider/OurTeamSlider";
import LastBlogSection from "./components/Home/LastBlogSection/LastBlogSection";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <OurTeamSlider />
      <LastBlogSection />
    </div>
  );
}
