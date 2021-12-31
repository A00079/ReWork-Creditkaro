import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Divider } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="text-gray-600 body-font bg-gray-900">
        <div class="px-0 py-6">
          {/* <div class="md:hidden lg:hidden xl:hidden bg-gray-800 mb-8 w-full">
            <h4
              class="text-xl text-white text-left title-font pt-4 ml-5 tracking-tight font-semibold"
            >
              Our Patners
        </h4>
            <div class="flex flex-wrap justify-around">
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-12 w-28 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 text-center title-font font-medium">
                      Holden
                </h2>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="hidden md:block lg:block xl:block">
            <div class="flex flex-row bg-gray-800 mb-8 w-full">
              <h4
                class="text-xl text-white title-font mr-12 pl-28 mt-5 ml-5 tracking-tight font-semibold"
              >
                Our Patners
          </h4>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-14 flex items-center bg-gray-900 p-2 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-100 title-font font-medium">
                      Holden Caulfield
                </h2>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            class="container mx-auto px-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
          >
            <div
              class="w-64 flex-shrink-0 text-left md:mx-0 md:mx-auto md:text-center md:text-left lg:mx-auto lg:text-center xl:mx-auto xl:text-center"
            >
              <a
                class="flex title-font font-medium items-center md:justify-start justify-start text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  ></path>
                </svg>
                <span class="ml-3 text-xl text-white">Credit Buddy</span>
              </a>
              {/* <p class="mt-2 text-sm  text-left text-gray-500">
                Finance Investment
          </p> */}
            </div>
            <div
              class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
            >
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                {/* <h2
                  class="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2> */}
                <nav class="list-none mb-10 cursor-pointer">
                  <Link to='/credit-card'>

                    <li className="mb-2">
                      <a class="text-gray-500 hover:text-gray-300 ">Credit Card</a>
                    </li>
                  </Link>
                  <Link to='/personal-loan'>

                    <li>
                      <a class="text-gray-500 hover:text-gray-300">Personal Loan</a>
                    </li>
                  </Link>
                  {/* <li>
                    <a class="text-gray-600 hover:text-gray-300">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Fourth Link</a>
                  </li> */}
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                {/* <h2
                  class="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2> */}
                <nav class="list-none mb-10 cursor-pointer">
                  <Link to='/home-loan'>

                    <li>
                      <a class="text-gray-500 hover:text-gray-300">Home Loan</a>
                    </li>
                  </Link>
                  <Link to='/demat-account'>

                    <li>
                      <a class="text-gray-500 hover:text-gray-300">Demat Account</a>
                    </li>
                  </Link>
                  {/* <li>
                    <a class="text-gray-600 hover:text-gray-300">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Fourth Link</a>
                  </li> */}
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                {/* <h2
                  class="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2> */}
                <nav class="list-none mb-10 cursor-pointer">
                  <Link to='/saving-account'>

                    <li>
                      <a class="text-gray-500 hover:text-gray-300">Saving Account</a>
                    </li>
                  </Link>
                  {/* <li>
                    <a class="text-gray-600 hover:text-gray-300">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Fourth Link</a>
                  </li> */}
                </nav>
              </div>
              {/* <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                <h2
                  class="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2>
                <nav class="list-none mb-10 cursor-pointer">
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-300">Fourth Link</a>
                  </li>
                </nav>
              </div> */}
            </div>
          </div>
          <div class="hidden md:block lg:block xl:block bg-gray-700 mt-6 p-2">
            <div class="flex justify-around">
              <div class="flex flex-row justify-center items-center">
                {/* <p class="text-gray-400 pl-5">Investors</p> */}
                <p class="text-gray-400 pl-5">Privacy Policy</p>
                <p class="text-gray-400 pl-5">Terms of Use</p>
                <p class="text-gray-400 pl-5">Disclaimer</p>
                <p class="text-gray-400 pl-5">Intellectual Policy</p>
                <p class="text-gray-400 pl-5">Sitemap</p>
              </div>
              <div class="flex flex-row justify-end">
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/facebook.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/whatapp.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/insta.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/twitter.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/linkin.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="md:hidden lg:hidden xl:hidden">
            <div
              class="flex-grow flex flex-wrap bg-gray-700 mt-6 p-2 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
            >
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Investors</p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Privacy Policy</p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Terms of Use</p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Disclaimer</p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Intellectual Policy</p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p class="text-gray-400 pl-5">Sitemap</p>
              </div>
              <div class="flex flex-row mx-auto mt-5 mb-3">
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/facebook.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/whatapp.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/insta.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/twitter.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/linkin.png"
                    class="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
              </div>
            </div>
          </div>
          {/* <div
            class="hidden md:block lg:block xl:block mt-12 md:mt-2 lg:mt-2 xl:mt-2 p-2"
          >
            <div class="flex justify-around">
              <div class="flex flex-row justify-center">
                <p class="text-sm font-semibold text-gray-300">
                  Supported Payment Methods
            </p>
              </div>
              <div class="flex flex-row justify-end">
                <p class="text-sm font-semibold text-gray-300">Secured By</p>
              </div>
            </div>
          </div> */}
          {/* <div class="hidden md:block lg:block xl:block mt-1 p-2">
            <div class="flex justify-around">
              <div class="flex flex-row justify-center items-center">
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/mastercard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/masterpass.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img src="/img/paypal.png" class="bg-white rounded w-16 h-9" />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/paysafecard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img src="/img/visa.png" class="bg-white rounded w-16 h-9" />
                </p>
              </div>
              <div class="flex flex-row justify-end">
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/mastercard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/masterpass.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
              </div>
            </div>
          </div> */}
          {/* <div
            class="md:hidden lg:hidden xl:hidden mt-12 md:mt-2 lg:mt-2 xl:mt-2 p-2"
          >
            <div>
              <p class="text-sm font-semibold text-gray-300 mx-auto px-2 mb-2">
                Supported Payment Methods
          </p>
              <div class="flex flex-row justify-center mx-auto px-2">
                <p class="text-gray-400">
                  <img
                    src="/img/mastercard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/masterpass.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img src="/img/paypal.png" class="bg-white rounded w-16 h-9" />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/paysafecard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img src="/img/visa.png" class="bg-white rounded w-16 h-9" />
                </p>
              </div>
            </div>

            <div>
              <p class="text-sm font-semibold text-gray-300 mx-auto px-2 mt-4 mb-2">
                Secured By
          </p>
              <div class="flex flex-row justify-start mx-auto px-2">
                <p class="text-gray-400">
                  <img
                    src="/img/mastercard.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
                <p class="text-gray-400 pl-5">
                  <img
                    src="/img/masterpass.png"
                    class="bg-white rounded w-16 h-9"
                  />
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div class="bg-gray-900 border-t-2 border-gray-700">
          <div
            class="container mx-auto py-2 px-10 md:px-24 lg:px-24 xl:px-10 flex flex-wrap flex-col sm:flex-row"
          >
            <small
              class="text-gray-400 text-left md:text-left lg:text-left xl:text-left sm:text-left"
            >
              Office No.348/349 | 2nd floor | Orchard Corporate Park | ORM Wing B | Royal Palms Estate | Near Film City | Goregaon East | Mumbai | Maharashtra - 400065<br />
              All Rights Reserved. *No. 1 in terms of loan disbursal as per industry
              estimates.
            </small>
            <span
              class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-start md:justify-center lg:justify-center xl:justify-center sm:justify-start"
            >
              <a class="text-gray-500">
                <img src="/img/india.png" class="w-12 h-12" />
              </a>
              <small class="ml-3 text-gray-200 items-center mt-3">
                Made in India
              </small>
            </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
