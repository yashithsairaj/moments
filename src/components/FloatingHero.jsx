import React from "react";
import phoneImage from "../../public/iphone.png"; // Replace with actual path
import lockedImage from "../../public/hero2.jpeg"; // Replace with actual path
import clearImage from "../../public/hero1.png"; // Replace with actual path
import iconStar from "../../public/Staricon.png"; // Replace with actual path
import iconDownload from "../../public/Downloadicon.png"; // Replace with actual path
import iconGift from "../../public/Gifticon.png"; // Replace with actual path
import iconHeart from "../../public/Hearticon.png"; // Replace with actual path
import globeBackground from "../../public/globebg.png"
import { Lock } from "lucide-react";

const FloatingHero = () => {
  return (
    <>
      <div className="relative w-full h-[90vh] md:h-screen bg-gradient-to-b from-gray-100 to-pink-100 overflow-hidden flex items-center justify-center rounded-4xl shadow-md" data-aos="fade-up" data-aos-duration="1000">
        {/* <div
          className="absolute w-[130%] h-[130%] rounded-full z-0"
          style={{
            backgroundImage: `radial-gradient(circle, #f9a8d4 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            opacity: 0.3,
          }}
        ></div> */}
        

        <img
          src={globeBackground}
          alt="globe background"
          className="absolute w-[130%] h-[130%] object-contain z-0 opacity-50"
        />

        {/* iPhone in center */}
        <img
          src={phoneImage}
          alt="phone"
          className="relative z-10 w-[250px] md:w-[300px] lg:w-[360px]"
          data-aos="fade-up" data-aos-duration="2000"
        />

        {/* Floating Images */}
        {/* Top Left Locked */}
        <div className="absolute top-[15%] left-[10%] w-20 h-28 md:w-42 md:h-52 bg-cover rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-md z-10" data-aos="fade-up" data-aos-duration="1500">
          <img
            src={lockedImage}
            alt="blurred"
            className="w-full h-full object-cover blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="text-white text-xl">
              <Lock className="text-white w-8 h-8" />
            </span>
          </div>
        </div>

        {/* Bottom Left Locked */}
        <div className="absolute bottom-[10%] left-[12%] w-20 h-28 md:w-24 md:h-32 bg-cover rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-md z-10" data-aos="fade-up" data-aos-duration="1500">
          <img
            src={lockedImage}
            alt="blurred"
            className="w-full h-full object-cover blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="text-white text-xl">
              <Lock className="text-white w-8 h-8" />
            </span>
          </div>
        </div>

        {/* Top Right Clear Image */}
        <div className="absolute top-[8%] right-[8%] w-20 h-28 md:w-42 md:h-52 rounded-xl overflow-hidden z-10 shadow-lg" data-aos="fade-up" data-aos-duration="1500">
          <img
            src={clearImage}
            alt="clear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right Locked */}
        <div className="absolute bottom-[8%] right-[10%] w-20 h-28 md:w-42 md:h-52 bg-cover rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-md z-10" data-aos="fade-up" data-aos-duration="1500">
          <img
            src={lockedImage}
            alt="blurred"
            className="w-full h-full object-cover blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="text-white text-xl">
              <Lock className="text-white w-8 h-8" />
            </span>
          </div>
        </div>

        {/* Floating Icons */}
        <img
          src={iconStar}
          alt="star"
          className="absolute top-[10%] left-[25%] w-8 md:w-20 z-20"
        />
        <img
          src={iconDownload}
          alt="download"
          className="absolute bottom-[18%] left-[25%] w-8 md:w-10 z-20"
        />
        <img
          src={iconGift}
          alt="gift"
          className="absolute top-[25%] right-[25%] w-8 md:w-10 z-20"
        />
        <img
          src={iconHeart}
          alt="heart"
          className="absolute bottom-[35%] right-[25%] w-8 md:w-20 z-20"
        />
      </div>
    </>
  );
};

export default FloatingHero;
