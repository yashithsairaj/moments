// import { Lock } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="py-12 flex flex-col lg:flex-row items-center justify-between">
//       <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//         <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//           <span className="text-black">Your Special </span>
//           <span className="text-pink-500">Moments</span>
//           <span className="text-black">,</span>
//         </h1>
//         <h2 className="text-5xl lg:text-6xl font-bold">
//           <span className="text-pink-400 inline-flex items-center">
//             <svg
//               className="w-16 h-16 mr-4"
//               viewBox="0 0 100 100"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M50 15C30.67 15 15 30.67 15 50s15.67 35 35 35 35-15.67 35-35S69.33 15 50 15zm0 60c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"
//                 fill="currentColor"
//               />
//             </svg>
//             Just a Tap Away
//           </span>
//         </h2>
//       </div>
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <div className="grid grid-cols-2 gap-6 w-96 h-64">
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <img
//               src="/hero2.jpeg"
//               alt="Wedding moment"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src =
//                   "https://via.placeholder.com/300x400?text=Wedding+Photo";
//               }}
//             />
//           </div>
//           <div className="rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-200">
//             <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
//               {/* Background Image with Blur */}
//               <img
//                 src="/hero1.png" // Replace with your image
//                 alt="Locked content"
//                 className="w-full h-full object-cover blur-lg scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
//                 <Lock className="text-white w-10 h-10" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Lock } from "lucide-react";
import DownloadButtons from "./DownloadButtons";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-8 px-6 md:px-1 py-7 rounded-2xl">
      {/* Left Image */}
      <div className="flex-col hover:scale-105 transition-all " data-aos="fade-up" data-aos-duration="2000">
        <div className="pt-20"></div>
        <div className="w-40 h-56 rounded-4xl overflow-hidden shadow-2xl border-white border-2 ">
          <img
            src="/hero1.png"
            alt="Wedding"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Text */}
      <div className="text-center md:text-left" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl md:text-8xl font-bold leading-tight font-roboto">
          Your Special <span className="text-pink-500">Moments</span>,{" "}
          <br className="hidden md:block" />
          <div className="flex">
            <span className="px-6">
              <img src="doughnut.png" alt="" className="w-24 " />
            </span>
            <span>Just a Tap Away</span>
          </div>
        </h1>
        <div className="flex justify-center gap-4 mt-6">
        <DownloadButtons/>
        </div>
      </div>

      {/* Right Image with Blur & Lock */}
      <div className="flex-col" data-aos="fade-up" data-aos-duration="2000">
        <div className="w-40 h-56 rounded-2xl overflow-hidden relative shadow-md hover:scale-105 transition-all">
          <img
            src="/hero2.jpeg"
            alt="Locked"
            className="w-full h-full object-cover blur-xl scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="text-white w-8 h-8" />
          </div>
        </div>
        <div className="pb-28"></div>
      </div>
    </section>
  );
};

export default Hero;
