// import React from "react";
// import Slider from "react-slick";
// import { Heart } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "/carousel1.png",
//   "/carousel2.png",
//   "/carousel3.png",
//   "/carousel4.png",
//   "/carousel5.png",
//   "/carousel6.png",
//   "/carousel7.png",
//   "/carousel8.png",
//   "/carousel9.png",
// ];

// const GalleryCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   // Split images into chunks of 6 for each grid page
//   const chunkedImages = [];
//   for (let i = 0; i < images.length; i += 6) {
//     chunkedImages.push(images.slice(i, i + 6));
//   }

//   return (
//     <div className="px-4 py-10 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//         Showcasing the Gallery
//       </h2>

//       <Slider {...settings}>
//         {chunkedImages.map((group, slideIndex) => (
//           <div key={slideIndex}>
//             <div className="grid grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
//               {group.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className={`relative overflow-hidden rounded-xl ${
//                     idx % 5 === 0 ? "row-span-2" : "row-span-1"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`Gallery ${idx}`}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                   <button className="absolute top-2 right-2 bg-white/70 hover:bg-white rounded-full p-2 transition">
//                     <Heart size={18} className="text-pink-500" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default GalleryCarousel;

// src/components/GalleryShowcase.jsx
import React from "react";
import Slider from "react-slick";
// import { HeartIcon, ThumbUpIcon } from "@heroicons/react/outline";
// import { HeartIcon as HeartSolid } from "@heroicons/react/solid";

import { Heart, ThumbsUp } from "lucide-react";


// Import the slick carousel CSS - you'll need to install these via npm
// npm install react-slick slick-carousel
// And import in your main file:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Reusable Image Component
const GalleryImage = ({ src, alt, className, liked = false }) => {
    const [isLiked, setIsLiked] = React.useState(liked);
  
    return (
      <div className={`relative rounded-lg overflow-hidden group ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/600x600?text=${alt.replace(
              /\s+/g,
              "+"
            )}`;
          }}
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 "
        >
          <Heart
            size={24}
            className={isLiked ? "text-pink-500 fill-pink-500" : "text-pink-500"}
          />
        </button>
      </div>
    );
  };
  

// Caption Component
const SavePhotoCaption = () => (
    <div className="absolute top-15 right-4 z-10">
      <div className="bg-pink-500 text-white px-4 py-2 rounded-full inline-flex items-center shadow-md">
        <ThumbsUp className="h-5 w-5 mr-2" />
        <span className="text-base">Easily save and organize your best photos</span>
      </div>
    </div>
  );
  

// Gallery Grid Component - Reusable for each carousel slide
const GalleryGrid = ({ images }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {/* Featured image (biggest - 2x2 block) */}
        <div className="lg:col-span-3 lg:row-span-2 h-[300px] sm:h-[400px] lg:h-[500px] relative">
          <GalleryImage
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover rounded-xl"
            liked={images[0].liked}
          />
          <SavePhotoCaption />
        </div>
  
        {/* Top right images (2 smaller ones side by side) */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
          <div className="h-[150px] sm:h-[180px] lg:h-[240px]">
            <GalleryImage
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover rounded-xl"
              liked={images[1].liked}
            />
          </div>
          <div className="h-[150px] sm:h-[180px] lg:h-[240px]">
            <GalleryImage
              src={images[2].src}
              alt={images[2].alt}
              className="h-full w-full object-cover rounded-xl"
              liked={images[2].liked}
            />
          </div>
        </div>
  
        {/* Bottom right left */}
        <div className="h-[150px] sm:h-[180px] lg:h-[240px]">
          <GalleryImage
            src={images[3].src}
            alt={images[3].alt}
            className="h-full w-full object-cover rounded-xl"
            liked={images[3].liked}
          />
        </div>
        <div className="h-[150px] sm:h-[180px] lg:h-[240px]">
          <GalleryImage
            src={images[4].src}
            alt={images[4].alt}
            className="h-full w-full object-cover rounded-xl"
            liked={images[4].liked}
          />
        </div>
        <div className="h-[150px] sm:h-[180px] lg:h-[240px]">
          <GalleryImage
            src={images[5].src}
            alt={images[5].alt}
            className="h-full w-full object-cover rounded-xl"
            liked={images[5].liked}
          />
        </div>
  
        {/* Bottom right middle (taller) */}
        {/* <div className="row-span-2 lg:h-[500px]">
          <GalleryImage
            src={images[4].src}
            alt={images[4].alt}
            className="h-full w-full object-cover rounded-xl"
            liked={images[4].liked}
          />
        </div> */}
  
        {/* Bottom right (3 stacked small images) */}
        {/* <div className="flex flex-col gap-4">
          {[5, 6, 7].map((i) => (
            <div key={i} className="h-[120px] sm:h-[150px] lg:h-[160px]">
              <GalleryImage
                src={images[i].src}
                alt={images[i].alt}
                className="h-full w-full object-cover rounded-xl"
                liked={images[i].liked}
              />
            </div>
          ))}
        </div> */}
      </div>
    );
  };
  

// Main Gallery Showcase Component
const GalleryCarousel = () => {
  // Sample image data - in a real application, this would come from your API or data source
  const gallerySlides = [
    // First slide
    [
        {
          src: "/carousel1.png",
          alt: "Formal wedding portrait",
          liked: false,
        },
        {
          src: "/carousel2.png",
          alt: "Wedding dance",
          liked: true,
        },
        {
          src: "/carousel3.png",
          alt: "Wedding couple walking",
          liked: false,
        },
        {
          src: "/carousel4.png",
          alt: "Wedding couple on grand staircase",
          liked: false,
        },
        {
          src: "/carousel5.png",
          alt: "Wedding couple in formal attire",
          liked: false,
        },
        {
          src: "/carousel6.png",
          alt: "Bride portrait",
          liked: false,
        },
        {
          src: "/carousel7.png",
          alt: "Wedding couple seated",
          liked: false,
        },
        {
          src: "/carousel8.png",
          alt: "Wedding dance",
          liked: false,
        },
        
      ],
    // Second slide - duplicate for demonstration
    [
      {
        src: "/carousel1.png",
        alt: "Formal wedding portrait",
        liked: false,
      },
      {
        src: "/carousel2.png",
        alt: "Wedding dance",
        liked: true,
      },
      {
        src: "/carousel3.png",
        alt: "Wedding couple walking",
        liked: false,
      },
      {
        src: "/carousel4.png",
        alt: "Wedding couple on grand staircase",
        liked: false,
      },
      {
        src: "/carousel5.png",
        alt: "Wedding couple in formal attire",
        liked: false,
      },
      {
        src: "/carousel6.png",
        alt: "Bride portrait",
        liked: false,
      },
      {
        src: "/carousel7.png",
        alt: "Wedding couple seated",
        liked: false,
      },
      {
        src: "/carousel8.png",
        alt: "Wedding dance",
        liked: false,
      },
      
    ],
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed:3000,
    className: "gallery-carousel",
    customPaging: function (i) {
      return (
        <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-pink-500 focus:bg-pink-500 active:bg-pink-500"></div>
      );
    },
    dotsClass: "slick-dots custom-dot-class mt-8",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-7xl font-bold text-center mb-16">
          Showcasing the Gallery
        </h2>

        <Slider {...settings}>
          {gallerySlides.map((slide, index) => (
            <GalleryGrid key={index} images={slide} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GalleryCarousel;
