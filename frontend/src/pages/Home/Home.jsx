import Hero from "./components/Hero/Hero";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import PlatformPreview from "./components/PlatformPreview/PlatformPreview";
import HomeCTA from "./components/HomeCTA/HomeCTA";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <PlatformPreview />
      <HomeCTA />
    </>
  );
}

export default Home;
