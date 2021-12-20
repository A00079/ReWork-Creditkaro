import React from 'react'
export default function SpecialOffersForYou(props) {
    return (
        <React.Fragment>
            <div class="flex min-h-screen">
                <nav class="w-64 flex-shrink-0 hidden sm:block">
                    <div class="flex-auto bg-gray-900 h-full">
                        <div class="flex flex-col overflow-y-auto">
                            <ul class="relative m-0 p-0 list-none h-full">
                                <li class="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                                    Navigations
                                </li>
                                <li class="text-white p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                                    <div class="mr-4 flex-shrink-0 my-auto">
                                        <svg class="fill-current w-5 h-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                                    </div>
                                    <div class="flex-auto my-1">
                                        <span>Home</span>
                                    </div>
                                </li>
                                <li class="p-4 w-full flex relative shadow-sm">
                                    <div class="flex-auto my-1">
                                        <span class="text-white font-medium">Others</span>
                                    </div>
                                </li>

                                <div class="text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                    <div class="mr-4 my-auto">
                                        <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                                    </div>
                                    <div class="flex-auto my-1">
                                        <span>Credit Cards</span>
                                    </div>
                                </div>

                                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                    <div class="mr-4 my-auto">
                                        <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                                    </div>
                                    <div class="flex-auto my-1">
                                        <span>Personal Loan</span>
                                    </div>
                                </div>

                                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                    <div class="mr-4 my-auto">
                                        <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></svg>            </div>
                                    <div class="flex-auto my-1">
                                        <span>Home Loan</span>
                                    </div>
                                </div>

                                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                    <div class="mr-4 my-auto">
                                        <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>            </div>
                                    <div class="flex-auto my-1">
                                        <span>Demat Account</span>
                                    </div>
                                </div>

                                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                    <div class="mr-4 my-auto">
                                        <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></svg>
                                    </div>
                                    <div class="flex-auto my-1">
                                        <span>Saving Account</span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div class="flex flex-col w-full">
                    <header class="text-white bg-yellow-300 sticky left-auto top-0 right-0">
                        <div class="h-12 px-6 flex relative items-center justify-between">
                            <div class="flex items-center p-4">
                                <span class="text-lg font-bold sm:text-2xl  tracking-wide">Best Credit Cards In India</span>
                            </div>
                            <div>
                                <button class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                    <img class="h-full w-full object-cover" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div id='content-main'>
                        <div className='flex flex-col  pl-20 pr-10 justify-start space-y-5 items-center w-full'>
                            {
                                [...new Array(3)].map((el, index) => {
                                    return (
                                        <div class="p-2 w-full">
                                            <div class="h-full bg-purple-100 shadow-xl flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src="https://dummyimage.com/80x80" />
                                                <div class="flex-grow">
                                                    <h2 class="text-indigo-600 title-font font-bold">Axsis Bank MY Zone Credit Card</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Card Type</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Fee</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Eligiblity</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <button class="text-white text-sm p-2 rounded-md bg-indigo-600 title-font font-medium">Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

