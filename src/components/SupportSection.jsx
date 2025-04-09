import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadButton = ({ platform, icon, primary }) => {
  return (
    <button
      className={`flex items-center gap-2 px-5 py-2 rounded-full border font-medium text-base hover:scale-105 transition-all
        ${primary ? 'bg-pink-600 text-white border-pink-600 hover:bg-pink-700' : 'text-black border-pink-300 hover:bg-pink-100'}
      `}
    >
      {icon}
      Download for {platform}
    </button>
  );
};

const SupportSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-pink-100 rounded-3xl p-6 md:p-7  flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm " >
      {/* Left content */}
      <div>
        <h2 className="text-4xl font-roboto text-black">
          Need <br /><span className="text-pink-600">further assistance?</span> <span role="img" aria-label="sparkles">✨</span>
        </h2>
        <p className="text-black text-lg mt-3">Reach out to our support team at</p>
        <p className="text-base text-black mt-1">support@momentsapp.com</p>
      </div>

      {/* Right buttons */}
      <div className="flex gap-4" data-aos="fade-up" data-aos-duration="1500">
        <DownloadButton
          platform="IOS"
          primary
          icon={<Apple size={16} />}
        />
        <DownloadButton
          platform="Android"
          primary={false}
          icon={<Play size={16} />}
        />
      </div>
    </div>
  );
};

export default SupportSection;
