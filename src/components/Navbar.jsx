const Navbar = () => {
  return (
    <header className="py-4 px-6">
      <div className="container flex items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-pink-400 flex items-center justify-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1z" />
              <path d="M10 4a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 01-2-2V4z" />
              <path d="M10 12a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1z" />
              <path d="M4 4a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              <path d="M4 12a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z" />
            </svg> */}
            <img src="/logo100.png" alt=""/>
          </div>
          <span className="ml-2 text-xl font-bold">Moments</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
