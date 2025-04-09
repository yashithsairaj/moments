import React from "react";

const steps = [
  {
    title: "Sign Up",
    description:
      "Simply enter your details and get access to your event photos with a unique function code.",
    number: "1",
    bg: "bg-yellow-300/50",
    numberColor: "text-yellow-300",
  },
  {
    title: "Enter Code & Access Photos",
    description:
      "Access your event album instantly. Mark favorites or use AI face search to find yourself.",
    number: "2",
    bg: "bg-pink-200/50",
    numberColor: "text-pink-300",
  },
  {
    title: "Download & Share",
    description:
      "Save your memories in high quality or order stunning prints with just a tap. Easily share your favorite moments with friends and family!",
    number: "3",
    bg: "bg-pink-500",
    numberColor: "text-pink-300",
    textColor: "text-white",
  },
];

const StepsCards = () => {
  return (
    <div className="px-4 py-10 text-center mt-5">
      <h2 className="text-7xl font-bold font-roboto" data-aos="fade-up" data-aos-duration="1000">
        Few easy steps <br />
        and you're good to <br />
        <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1500">
          <span className="text-pink-500 font-semibold">GO!</span>
          <span>
            <img src="/ladder.png" alt="" />
          </span>
        </div>
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.bg} rounded-xl p-6 relative overflow-hidden min-h-[250px] flex flex-col justify-between hover:scale-105 transition-all`}
            data-aos="fade-up" data-aos-duration={(1000 + (index*1000)).toString()}
          >
            <h3
              className={`text-4xl font-semibold font-roboto text-left z-10 ${
                step.textColor || "text-black/80"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`text-justify mt-2 md:mt-24 text-xl py-11 ${
                step.textColor || "text-black"
              }`}
            >
              {step.description}
            </p>
            <div
              className={`absolute top-1 right-1 text-[120px] md:text-[200px] font-bold leading-none ${step.numberColor} opacity-75 select-none pointer-events-none z-0`}
            >
              {step.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsCards;
