import Image from "next/image";
import Header from "./components/Home/Header/Header";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Services from "./components/Home/Services/Services";
import OurTeamSlider from "./components/Home/OurTeam/OurTeamSlider/OurTeamSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <OurTeamSlider />
    </div>
  );
}
