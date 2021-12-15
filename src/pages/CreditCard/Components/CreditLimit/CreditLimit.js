import React from 'react'

export default function Creditlimit(props) {
    return (
        <>
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h2
                        class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
                    >
                        Credit Card
                    </h2>
                    <h1
                        class="text-2xl md:text-3xl font-bold title-font mb-4 text-indigo-900"
                    >
                        HOW TO USE YOUR CREDIT CARD RIGHT?
                    </h1>
                    <p
                        class="w-full mx-auto md:px-28 lg:px-28 xl:px-28 px-4 leading-relaxed text-base text-gray-600 font-semibold"
                    >
                        Keep the following tips in mind to prevent becoming indebted as a result of unrestricted credit card spending.
                    </p>
                </div>
                <div class="Limit-section">
                    <div class="w-full md:flex flex-row lg:flex flex-row xl:flex flex-row">
                        <div class="animation-limit">
                            <img src="/img/creditlimit.jpg" style={{ width: '900px' }} />
                        </div>
                        <div class="content-limit">
                            <div class="flex flex-col">
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">1</p>
                                    </div>
                                    <div class="flex-grow pl-6">
                                        <small class="text-sm text-gray-600 font-bold">
                                            Read the fine print to ensure that you are informed of all the fees and terms that apply to your card
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-2 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">2</p>
                                    </div>
                                    <div class="flex-grow pl-6">
                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        Spend no more than you can afford to repay.
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">3</p>
                                    </div>
                                    <div class="flex-grow pl-6">

                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        Avoid adding daily items to your card so you can keep track of how much you're spending
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">4</p>
                                    </div>
                                    <div class="flex-grow pl-6">

                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        	Check your credit limit on a regular basis and cut back on spending after you've reached 40% of your available credit limit.
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">5</p>
                                    </div>
                                    <div class="flex-grow pl-6">

                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        	To prevent paying interest on outstanding card balances, choose an EMI option for major purchases made with your card.
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">6</p>
                                    </div>
                                    <div class="flex-grow pl-6">

                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        	Always maintain at least 40% of your credit limit available for emergencies.
                                        </small>
                                    </div>
                                </div>
                                <div class="p-2 md:w-full flex">
                                    <div
                                        class="w-8 h-8 ring-2 ring-indigo-900 inline-flex items-center justify-center rounded-full bg-indigo-600 text-indigo-500 mb-4 flex-shrink-0"
                                    >
                                        <p class="text-white font-bold text-xs">7</p>
                                    </div>
                                    <div class="flex-grow pl-6">

                                        <small class="leading-relaxed  text-sm text-gray-600 font-semibold">
                                        Plan your purchases and only use your credit card for pre-planned purchases. Avoid using your credit card for impulsive purchases.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
