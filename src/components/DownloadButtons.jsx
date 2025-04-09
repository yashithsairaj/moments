const DownloadButtons = () => {
    return (
      <section className="flex flex-col sm:flex-row justify-center gap-4 mt-8 ">
        <a href="#" className="bg-pink-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Download for iOS</span>
        </a>
        <a href="#" className="bg-white text-black border border-gray-300 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span>Download for Android</span>
        </a>
      </section>
    );
  };
  
  export default DownloadButtons;