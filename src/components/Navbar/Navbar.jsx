import React from "react";

function Navbar() {
  return (
    <div>
      <body>
        <img
          className="fixed object-cover bg-no-repeat h-full	w-full"
          src="/src/components/Navbar/Img/hhhhh.png"
          alt=""
        />
        <header>
          <nav class="p-10 z-10 absolute top-0 flex flex-wrap items-center justify-between w-full py-4 md:py-0 text-lg text-gray-700 bg-transparent">
            <div>
              <h1 className="text-white text-lg">Logo</h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              class="h-6 w-6 cursor-pointer md:hidden block text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div
              class="hidden w-full md:flex md:items-center md:w-auto"
              id="menu"
            >
              <ul class="pt-4 text-lg text-gray-700 md:flex md:justify-between md:pt-0 m-10">
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-2 block text-slate-50 hover:text-black transition-all hover:bg-slate-50 rounded-md"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="flex flex-col relative pt-44 md:pt-64  justify-center items-center	content-center ">
          <h1 className="text-white text-3xl md:text-7xl text-white transition-all">
            We Make Creative Design
          </h1>
          <h2 className="mt-20 text-xl md:text-3xl text-slate-200 transition-all">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut
            aliquam,
            <br /> purus sit amet luctus venenatis, <br /> lectus magna
            fringilla urna, <br /> porttitor rhoncus dolor.
          </h2>
          <button class="text-white mt-20 bg-transparent hover:bg-white font-semibold hover:text-black py-2 px-4 border border-blue-600 hover:border-transparent rounded text-xl transition-all">
            See more
          </button>
        </div>
      </body>
    </div>
  );
}

export default Navbar;
