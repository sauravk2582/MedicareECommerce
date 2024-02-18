import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { page1 } from "../Data/M1/page1";
import { page2 } from "../Data/M2/page2";
import { page3 } from "../Data/M3/page3";
import { page8 } from "../Data/M5/page8";
import { page16 } from "../Data/page16";
import { page10 } from "../Data/M7/page10";
import { page15 } from "../Data/M6/page15";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={page1} section={"Page 1"} />
        <HomeProductSection data={page2} section={"Page 2"} />
        <HomeProductSection data={page3} section={"Page 3"} />
        <HomeProductSection data={page8} section={"Page 8"} />
        <HomeProductSection data={page16} section={"Page 16"} />
        <HomeProductSection data={page10} section={"Page 10"} />
        <HomeProductSection data={page15} section={"Page 15"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
