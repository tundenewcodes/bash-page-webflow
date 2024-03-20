import AboutMe from "../../components/about-me";
import Communities from "../../components/communities/Communities";
import GetInTouch from "../../components/get-in-touch";
import Hero from "../../components/hero";
import MyBrands from "../../components/my-brands";
import WhatIDo from "../../components/what-i-does";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />

      <MyBrands />

      <AboutMe />
      <Communities />
      <GetInTouch />
    </>
  );
}
