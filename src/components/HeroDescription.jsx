import React from "react";

export const HeroDescription = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-3xl p-10 md:p-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Mission
          </h2> */}
          {/* <div className="h-0.5 w-16 bg-red-500 mb-8"></div> */}
          <p className="text-lg md:text-4xl font-roboto text-center" data-aos="fade-up" data-aos-duration="1000">
            Moments is a smart event photography platform that helps you easily
            access, organize, and share your special event photos.
          </p>
          <br />
          <p className="text-lg md:text-4xl font-roboto text-center pt-7" data-aos="fade-up" data-aos-duration="1500">
            Whether you're a customer, a photographer, or an event contributor,
            Moments ensures seamless photo management, secure storage, and
            effortless sharing—all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};
