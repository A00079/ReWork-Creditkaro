import React from 'react';

const WhatPeopleSay = () => {
    return (
        <React.Fragment>

            <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
                <div class="w-full bg-white  px-5 py-16 md:py-24 text-gray-800">
                    <div class="w-full max-w-6xl mx-auto">
                        <div class="text-center max-w-xl mx-auto">
                            <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
                            <h3 class="text-xl mb-5 font-light">See what people say about us.</h3>
                            <div class="text-center mb-10">
                                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div class="-mx-3 grid sm:grid-cols-3 grid-cols-1 gap-4">
                            <div class="w-full rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-4 items-center">
                                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="font-bold text-sm uppercase text-gray-600">Deepesh Singh</h6>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I used creditbuddy.com to check my credit score. The blog offers a thorough overview of credit scores and cibil scores. I was able to find out my credit score and other financial planning information on the website<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div class="w-full rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-4 items-center">
                                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="font-bold text-sm uppercase text-gray-600">Shalaka Pandey</h6>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Credit buddy assists in the selection of the best credit card. The blogs, depending on your preferences, aid in learning the features and process. The webpage is quite useful.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div class="w-full rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-4 items-center">
                                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="font-bold text-sm uppercase text-gray-600">Saloni Bordia </h6>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I've been using an Axis savings account for a few years and recently discovered credit buddy, through which I learned about Kotak 811. The website provided accurate information about all other savings accounts, allowing me to compare and choose the best one for myself<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WhatPeopleSay;