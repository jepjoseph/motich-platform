import AboutHero from "./components/AboutHero/AboutHero";
import OurStory from "./components/OurStory/OurStory";
import MissionVision from "./components/MissionVision/MissionVision";
import WhatWeBuild from "./components/WhatWeBuild/WhatWeBuild";
import AboutCTA from "./components/AboutCTA/AboutCTA";

import "./About.css";

function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeBuild />
      <AboutCTA />
    </>
  );
}

export default About;
