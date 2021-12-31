import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from 'react-router-dom';
import { SubNavBanner, NavItems, MobileMenu } from './components';

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [mbmenu, setmbmenu] = useState(false);

  const handleMobileMenu = () => {
    console.log('akakaka');
    setmbmenu(!mbmenu);
  }

  const handleMobileMenuNav = () => {
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
                    <Link to='/'>
                      <span class="text-white pl-20 sm:px-16 font-bold">Credit Buddy</span>
                    </Link>
                  </div>
                  {/* <div class="-mr-2 -my-2 pt-1 md:hidden">
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
                  </div> */}
                  <nav class="hidden md:flex space-x-10">
                    <NavItems />
                    <Link to='contact-us'>
                      <div
                        class="text-base md:text-sm mt-1 font-medium text-white hover:text-gray-300"
                      >
                        Contact
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
              {/* <MobileMenu mbmenu={mbmenu} /> */}
              {
                mbmenu ?
                  <div
                    key='mobile-menu'
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right block md:hidden"
                  >
                    <div
                      style={{ overflow: "scroll", height: "40rem" }}
                      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
                    >
                      <div class="pt-5 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                        <div class="flex items-center justify-between">
                          <div>
                            <img
                              class="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div class="-mr-2">
                            <button
                              onClick={() => handleMobileMenuNav()}
                              type="button"
                              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                              <span class="sr-only">Close menu</span>
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
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="mt-2">
                          <h4
                            class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                          >
                            Loansaa <p className='text-gray-700'>{mbmenu}</p>
                          </h4>
                          <div class="flex flex-wrap -m-2">
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Home Loan
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Personal Loan
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Used Car Loan
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Car Loan
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Educational Loan
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                        <div class="mt-2">
                          <h4
                            class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                          >
                            Investment
                          </h4>
                          <div class="flex flex-wrap -m-2">
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Demat Account
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Saving Account
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Mutual Funds
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Fixed Deposit
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                        <div class="mt-2">
                          <h4
                            class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                          >
                            Learn & Resources
                          </h4>
                          <div class="flex flex-wrap -m-2">
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Demat Account
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Saving Account
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Mutual Funds
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Fixed Deposit
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-40">
                              <div class="p-0">
                                <div class="h-full flex items-center p-2 rounded-lg">
                                  <img
                                    alt="team"
                                    class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src="https://dummyimage.com/80x80"
                                  />
                                  <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font text-sm font-bold">
                                      Demat Account
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="py-3 px-5 space-y-2">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                          <a
                            href="#"
                            class="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            <div class="flex flex-row">
                              <svg
                                class="w-6 h-6 mr-1 text-indigo-800"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <p class="text-gray-900 title-font text-sm font-bold">
                                Help Center
                              </p>
                            </div>
                          </a>
                        </div>
                        {/* <div>
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Sign up
              </a>
                      <p class="mt-2 text-center text-base font-medium text-gray-500">
                        Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                          Sign in
                </a>
                      </p>
                    </div> */}
                      </div>
                    </div>
                  </div> : null
              }
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
