// File: NavigationDemo.jsx
import React from "react";
import { Home, Upload, ImageIcon, Folder } from "lucide-react";

const NavigationDemo = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-24 px-20">
      {/* Top Navigation */}
      <div className="flex flex-col items-start gap-4 md:pl-48 hover:scale-105 transition-all" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex items-center bg-[#3D3D3D] rounded-full px-3 py-2 space-x-14 pr-5">
          <button className="flex items-center bg-white text-black px-6 py-4 rounded-full font-medium text-lg gap-7">
            <Home size={26} />
            Home
          </button>
          <Upload size={20} className="text-white" />
          <ImageIcon size={20} className="text-white" />
          <Folder size={20} className="text-white" />
        </div>

        <div className="flex items-center">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="4"
                refY="2.5"
                orient="auto"
              >
                <polygon points="0 0, 5 2.5, 0 5" fill="#DA5C9C" />
              </marker>
            </defs>
            <path
              d="M20,10 Q20,80 90,80"
              stroke="#DA5C9C"
              strokeWidth="5"
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeLinecap="round"
            />
          </svg>

          <div>
            <h2 className="text-3xl font-semibold">
              Explore Your Events at a Glance 📅✨
            </h2>
            <p className="text-2xl font-medium">
              Easily access all your special moments in one place!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col items-end gap-4 md:pr-48 hover:scale-105 transition-all" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex items-center bg-[#3D3D3D] rounded-full px-5 py-2 space-x-14">
          <Home size={20} className="text-white" />
          <button className="flex items-center bg-white text-black px-6 py-4 rounded-full font-medium text-lg gap-7">
            <Upload size={26} />
            Upload
          </button>
          <ImageIcon size={20} className="text-white" />
          <Folder size={20} className="text-white" />
        </div>

        <div className="flex items-center justify-end">
          <div className="text-right mr-2">
            <p className="text-2xl font-semibold">
              🖼️ Easily upload event photos from your
              <br />
              device or camera!
            </p>
          </div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            className="transform rotate-[175deg]"
          >
            <path
              d="M10,90 Q20,20 90,30"
              stroke="#DA5C9C"
              strokeWidth="5"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="#DA5C9C" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavigationDemo;
