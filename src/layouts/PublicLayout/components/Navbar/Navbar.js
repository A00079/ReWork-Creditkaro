import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from 'react-router-dom';
import { SubNavBanner, NavItems, MobileMenu } from './components';

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [mbmenu, setmbmenu] = useState(false);

  const handleMobileMenu = () => {
    setmbmenu(!mbmenu);
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(
    () => (
      <header>
        <React.Fragment>
          <section class="navbar">
            <div
              style={{ zIndex: '9999', boxShadow: '0 15px 20px rgb(0, 0, 0, 0.9)' }}
              className="w-32 h-32 md:-top-7 -left-6 lg:-top-7 -left-6 xl:-top-7 -left-6 rounded-full shadow-xl fixed -top-10 -left-10 inline-flex items-center justify-center bg-indigo-800 text-gray-400"
            >
              <Link to='/'>
                <button>
                  <img
                    class="h-8 w-auto sm:h-10 pl-7 mt-5 md:ml-5 mt-0 lg:pl-0 mt-0 xl:pl-0 mt-0"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <div
              class="bg-indigo-900 md:pb-0 lg:pb-0 xl:pb-0 pb-1 border-b-1 border-white fixed z-50 w-full"
            >
              <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                  class="flex justify-between items-center py-2  md:py-4 md:justify-start md:space-x-10"
                >
                  <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span class="text-white pl-20 sm:px-16 font-bold">Credit Buddy</span>
                    </a>
                  </div>
                  <div class="-mr-2 -my-2 pt-1 md:hidden">
                    <button
                      onClick={() => handleMobileMenu()}
                      class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-900"
                    >
                      <span class="sr-only">Open menu</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav class="hidden md:flex space-x-10">
                    <NavItems />
                    <a
                      href="#"
                      class="text-base md:text-sm mt-1 font-medium text-white hover:text-gray-300"
                    >
                      Contact
            </a>
                  </nav>
                </div>
              </div>
              <MobileMenu mbmenu={mbmenu} />
            </div>
          </section>
          <SubNavBanner />
        </React.Fragment >
      </header>
    ),
    [hideOnScroll]
  );
};

export default Navbar;
