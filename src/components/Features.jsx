// // src/components/Features.jsx
// import React from 'react';

// const FeatureCard = ({ title, icon, bgColor, children }) => {
//   return (
//     <div className="bg-white rounded-3xl shadow-md overflow-hidden">
//       <div className={`${bgColor} p-6 h-full flex flex-col items-center justify-center`}>
//         {children}
//         <div className="mt-4 text-center font-medium">
//           <span>{title}</span> {icon}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Features = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-2">
//             <span className="text-pink-500">Features</span>
//           </h2>
//           <h3 className="text-5xl font-bold">
//             that you'll Love. <span role="img" aria-label="love">❤️‍🔥</span>
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Event Albums Card */}
//           <FeatureCard title="Event Albums" icon="📸" bgColor="bg-pink-100">
//             <div className="relative w-full h-48">
//               <div className="absolute top-4 left-4 bg-white rounded-xl p-2 shadow-sm">
//                 <img
//                   src="/images/wedding-album.jpg"
//                   alt="Wedding Album"
//                   className="w-24 h-24 object-cover rounded-lg"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = 'https://via.placeholder.com/100?text=Wedding';
//                   }}
//                 />
//                 <div className="text-xs mt-1 text-center">Wedding Albums</div>
//               </div>
//               <div className="absolute top-12 right-12 bg-white rounded-xl p-2 shadow-sm transform rotate-3">
//                 <div className="relative">
//                   <img
//                     src="/images/wedding-album2.jpg"
//                     alt="Wedding Album"
//                     className="w-24 h-24 object-cover rounded-lg"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'https://via.placeholder.com/100?text=Wedding';
//                     }}
//                   />
//                   <div className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
//                     <span className="text-xs">★</span>
//                   </div>
//                 </div>
//                 <div className="text-xs mt-1 text-center">Wedding Albums</div>
//               </div>
//               <div className="absolute bottom-4 left-12 bg-white rounded-xl p-2 shadow-sm transform -rotate-6">
//                 <img
//                   src="/images/wedding-album3.jpg"
//                   alt="Wedding Album"
//                   className="w-24 h-24 object-cover rounded-lg"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = 'https://via.placeholder.com/100?text=Wedding';
//                   }}
//                 />
//                 <div className="text-xs mt-1 text-center">Wedding Albums</div>
//               </div>
//             </div>
//           </FeatureCard>

//           {/* AI Face Recognition Card */}
//           <FeatureCard title="AI Face Recognition" icon="🤖" bgColor="bg-yellow-50">
//             <div className="w-40 h-80 bg-black rounded-3xl overflow-hidden shadow-lg border-8 border-black">
//               <div className="h-full w-full flex items-center justify-center text-center p-4">
//                 <div className="text-white">
//                   <div className="mb-2 flex justify-center">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
//                   </div>
//                   <p className="text-xs opacity-70">Scanning photo in your phone...</p>
//                   <p className="text-xs opacity-70">This will take a moment</p>
//                 </div>
//               </div>
//             </div>
//           </FeatureCard>

//           {/* Easy Sharing Card */}
//           <FeatureCard title="Easy Sharing" icon="📤" bgColor="bg-pink-100">
//             <div className="relative w-full h-48">
//               <div className="absolute top-2 left-4">
//                 <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
//                   <span className="text-2xl">♡</span>
//                 </div>
//               </div>

//               <div className="absolute top-12 right-8 transform rotate-12">
//                 <div className="bg-white rounded-lg py-1 px-3 shadow-md">
//                   <span className="text-sm">One-Tap<br/>Sharing</span>
//                 </div>
//               </div>

//               <div className="absolute bottom-2 left-10">
//                 <div className="bg-pink-500 text-white rounded-lg py-1 px-3 shadow-md">
//                   <span className="text-sm">Private<br/>Secure</span>
//                 </div>
//               </div>

//               <div className="absolute top-8 left-12 transform -rotate-12">
//                 <div className="bg-white rounded-lg py-1 px-3 shadow-md">
//                   <span className="text-sm">Collaborate Effortlessly</span>
//                 </div>
//               </div>

//               <div className="absolute right-6 top-2">
//                 <div className="bg-pink-300 text-white rounded-full w-8 h-8 flex items-center justify-center">
//                   <span className="text-sm">↓</span>
//                 </div>
//               </div>

//               <div className="absolute bottom-4 right-4">
//                 <div className="bg-pink-200 text-pink-500 rounded-full w-8 h-8 flex items-center justify-center">
//                   <span className="text-sm">↺</span>
//                 </div>
//               </div>
//             </div>
//           </FeatureCard>

//           {/* Favourites Card */}
//           <FeatureCard title="Favourites" icon="❤️" bgColor="bg-pink-200">
//             <div className="relative w-full h-48 flex flex-col items-center justify-center">
//               <div className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <button className="bg-pink-500 text-white rounded-full px-4 py-2 text-sm">
//                 Added to Favourites
//               </button>
//             </div>
//           </FeatureCard>

//           {/* Print & Download Card */}
//           <FeatureCard title="Print & Download" icon="🖨️" bgColor="bg-gradient-to-b from-yellow-100 to-pink-200">
//             <div className="w-full h-48 flex items-center justify-center">
//               {/* Gradient background serves as the content for this card */}
//             </div>
//           </FeatureCard>

//           {/* Cloud Storage Card */}
//           <FeatureCard title="Cloud Storage" icon="🗄️" bgColor="bg-pink-100">
//             <div className="w-full h-48 flex items-center justify-center">
//               {/* Minimal design for cloud storage card */}
//             </div>
//           </FeatureCard>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { Lock } from "lucide-react";
import React from "react";

const FeatureCard = ({ title, icon, bgColor, children }) => {
  return (
    <div className="bg-white rounded-3xl drop-shadow-2xl overflow-hidden flex-row hover:transform hover:-translate-y-2 transition-transform duration-300">
      <div
        className={`${bgColor} md:p-4 h-full flex flex-col items-center justify-center `}
      >
        {children}
        <div className="mt-4 text-center font-roboto text-3xl bg-white">
          <span>{title}</span> {icon}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 md:px-18"  data-aos="fade-up" data-aos-duration="1000">
        {/* event album */}
        <div className="col-span-1 md:pt-5">
          <FeatureCard title="Event Albums" icon="📸" bgColor="bg-white">
            <div className="relative w-full h-48 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              <div className="absolute top-4 left-4  rounded-xl p-2 shadow-sm">
                <img
                  src="/hero1.png"
                  alt="Wedding Album"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/100?text=Wedding";
                  }}
                />
                <div className="text-xs mt-1 text-center">Wedding Albums</div>
              </div>
              <div className="absolute top-12 right-12 bg-white rounded-xl p-2 shadow-sm transform rotate-3">
                <div className="relative">
                  <img
                    src="/hero1.png"
                    alt="Wedding Album"
                    className="w-24 h-24 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/100?text=Wedding";
                    }}
                  />
                  <div className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-xs">★</span>
                  </div>
                </div>
                <div className="text-xs mt-1 text-center">Wedding Albums</div>
              </div>
              <div className="absolute bottom-4 left-12 bg-white rounded-xl p-2 shadow-sm transform -rotate-6">
                <img
                  src="/hero1.png"
                  alt="Wedding Album"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/100?text=Wedding";
                  }}
                />
                <div className="text-xs mt-1 text-center">Wedding Albums</div>
              </div>
            </div>
          </FeatureCard>
        </div>
        {/* AI face */}
        <div className="row-span-2"  data-aos="fade-up" data-aos-duration="1000">
          <FeatureCard title="AI Face Recognition" icon="🤖" bgColor="bg-white">
            <div className="md:p-20  md:px-26 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              <div className="w-48 h-96 bg-black rounded-3xl overflow-hidden shadow-lg border-8 border-black">
                <div className="h-full w-full flex items-center justify-center text-center p-4">
                  <div className="text-white">
                    <div className="mb-2 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                    </div>
                    <p className="text-xs opacity-70">
                      Scanning photo in your phone...
                    </p>
                    <p className="text-xs opacity-70">
                      This will take a moment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
        {/* easy share */}
        <div className="row-span-2 md:pt-7" data-aos="fade-up" data-aos-duration="1000">
          <FeatureCard title="Easy Sharing" icon="📤" bgColor="bg-white">
            <div className="relative w-full h-48 md:h-[60vh] bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              <div className="absolute top-2 left-4">
                <div className="bg-pink-500 text-white rounded-full w-18 h-18 flex items-center justify-center">
                  <span className="text-5xl">♡</span>
                </div>
              </div>

              <div className="absolute top-35 right-8 transform rotate-12">
                <div className="bg-white rounded-lg py-1 px-3 shadow-md">
                  <span className="text-xl">
                    One-Tap
                    <br />
                    Sharing
                  </span>
                </div>
              </div>

              <div className="absolute bottom-15 left-10 transform -rotate-20">
                <div className="bg-pink-500 text-white rounded-lg py-1 px-3 shadow-md">
                  <span className="text-2xl">
                    Private
                    <br />
                    Secure
                  </span>
                </div>
              </div>

              <div className="absolute top-25 left-12 transform -rotate-20">
                <div className="bg-white rounded-lg py-1 px-3 shadow-md">
                  <span className="text-xl">Collaborate Effortlessly</span>
                </div>
              </div>

              <div className="absolute right-6 top-10">
                <div className="bg-pink-300 text-white rounded-full w-18 h-18 flex items-center justify-center">
                  <span className="text-2xl">↓</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="bg-pink-200 text-pink-500 rounded-full w-18 h-18 flex items-center justify-center">
                  <span className="text-2xl">↺</span>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
        {/* Favourites */}
        <div className="row-span-2 " data-aos="fade-up" data-aos-duration="1000">
          <FeatureCard title="Favourites" icon="❤️" bgColor="bg-white">
            <div className="relative w-full h-full flex flex-col items-center justify-center md:py-16 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
                <div className="flex-col">
                  <div className="w-40 h-56 rounded-2xl overflow-hidden relative shadow-md">
                    <img
                      src="/hero2.jpeg"
                      alt="Locked"
                      className="w-full h-full object-cover blur-xl scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="text-white" />
                    </div>
                  </div>
                  <div className="pb-7"></div>
                </div>
              </div>
              <button className="bg-pink-500 text-white rounded-full px-7 py-4 text-sm">
                Added to Favourites
              </button>
            </div>
          </FeatureCard>
        </div>
        {/* print and download */}
        <div className="row-span-1  md:pt-7" data-aos="fade-up" data-aos-duration="1000">
          <FeatureCard title="Print & Download" icon="🖨️" bgColor="bg-white">
            <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              {/* Gradient background serves as the content for this card */}
            </div>
          </FeatureCard>
        </div>
        {/* cloud storage */}
        <div className="col-span-1 " data-aos="fade-up" data-aos-duration="1000">
          <FeatureCard title="Cloud Storage" icon="🗄️" bgColor="bg-white">
            <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl">
              {/* Minimal design for cloud storage card */}
            </div>
          </FeatureCard>
        </div>
      </div>
    </>
  );
};

export default Features;
