import React, { useState } from 'react'

export default function Navitems() {
    const [toggleDrawerLoan, setToggleDrawerLoan] = useState(false);
    const [toggleDrawer_Investment, setToggleDrawer_Investment] = useState(false);
    const [toggleDrawer_LearnResources, setToggleDrawer_LearnResources] = useState(false);

    return (
        <>
            <div class="relative">
                <button
                    class="group rounded-md text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none mr-10 focus:text-indigo-500"
                >
                    <span>Credit Card</span>
                </button>
                <button
                    onClick={() => setToggleDrawerLoan(!toggleDrawerLoan)}
                    class="group rounded-md text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none"
                >
                    <span>Loans</span>
                    {
                        !toggleDrawerLoan ?
                            <svg
                                class="ml-2 h-5 w-5 text-white group-hover:text-gray-500 transition-all duration-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg> :
                            <svg
                                class="w-6 h-6 transition-all duration-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                    }
                </button>
                {
                    toggleDrawerLoan ?
                        <div
                            class="z-50 transition-all duration-500 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                            <div
                                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div class="relative flex bg-white px-2 py-3">
                                    <a
                                        href="#"
                                        class="-m-1 p-1 flex items-between rounded-lg hover:bg-gray-50"
                                    >
                                        {/* <img
                                    src="/img/details.png"
                                    class="flex-shrink-0 h-8 w-8 mt-3"
                                  /> */}
                                        <div className='flex-shrink-0 h-12 w-12 rounded-lg mt-3 bg-gray-200'>

                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Home Loan
                                </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Get a better understanding of where your traffic is
                                                coming from.
                                                        </p>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        class="-m-1 p-1 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <div className='flex-shrink-0 h-12 w-12 rounded-lg mt-3 bg-gray-200'>

                                        </div>

                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Personal Loan
                                                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Speak directly to your customers in a more meaningful
                                                way.
                                                        </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> : null
                }

            </div>
            <div class="relative">
                <button
                    onClick={() => setToggleDrawer_Investment(!toggleDrawer_Investment)}
                    class="group rounded-md text-white inline-flex md:text-sm items-center text-base font-medium hover:text-gray-400 focus:outline-none"
                >
                    <span>Investments</span>
                    {
                        !toggleDrawer_Investment ? <svg
                            class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg> :
                            <svg
                                class="w-6 h-6 transition-all duration-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                    }
                </button>

                {
                    toggleDrawer_Investment ?
                        <div
                            class="z-50 absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                            <div
                                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div
                                    class="relative grid gap-8 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                >
                                    <a
                                        href="#"
                                        class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <img
                                            src="/img/search.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Demat Account
                                                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Get all of your questions answered in our forums or
                                                contact support.
                                                        </p>
                                        </div>
                                    </a>

                                    <a
                                        href="#"
                                        class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <img
                                            src="/img/documentation.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Savings Account
                                                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Learn how to maximize our platform to get the most out
                                                of it.
                                                        </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
            <div class="relative">
                <button
                    onClick={() => setToggleDrawer_LearnResources(!toggleDrawer_LearnResources)}
                    class="group rounded-md text-white inline-flex md:text-sm items-center text-base font-medium hover:text-gray-400 focus:outline-none"
                >
                    <span>Learn & Resources</span>
                    {
                        !toggleDrawer_LearnResources ?
                            <svg
                                class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            :
                            <svg
                                class="w-6 h-6 transition-all duration-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                    }

                </button>

                {
                    toggleDrawer_LearnResources ?
                        <div
                            class="z-50 absolute z-10 left-1/5 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                            <div
                                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div
                                    class="relative grid gap-8 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                >
                                    <a
                                        href="#"
                                        class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <img
                                            src="/img/search.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Demat Account
                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Get all of your questions answered in our forums or
                                                contact support.
                        </p>
                                        </div>
                                    </a>

                                    <a
                                        href="#"
                                        class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <img
                                            src="/img/documentation.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Savings Account
                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Learn how to maximize our platform to get the most out
                                                of it.
                        </p>
                                        </div>
                                    </a>

                                    <a
                                        href="#"
                                        class="-m-5 p-3 bg-gray-100 flex items-start rounded-lg hover:bg-gray-100"
                                    >
                                        <img
                                            src="/img/finance.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Mutual Funds
                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                See what meet-ups and other events we might be
                                                planning near you.
                        </p>
                                        </div>
                                    </a>

                                    <a
                                        href="#"
                                        class="-m-5 p-4 bg-gray-100 mt-1 flex items-start rounded-lg hover:bg-gray-100"
                                    >
                                        <img
                                            src="/img/savings.png"
                                            class="flex-shrink-0 h-10 w-10 mt-3"
                                        />
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Fixed Deposit
                        </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Understand how we take your privacy seriously.
                        </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        </>
    )
}
