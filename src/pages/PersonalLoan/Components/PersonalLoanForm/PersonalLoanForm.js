import React from 'react'

export default function Creditform(props) {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-10 pr-0">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">Personal Loan
                        </h1>
                        <p class="mb-3 leading-relaxed">A personal loan is a loan that does not require collateral or security and is available with little paperwork.</p>
                        <p class="mb-3 leading-relaxed">This loan's cash can be used for any reasonable financial need. You must repay it in accordance with the terms agreed upon with the bank, just like any other loan.</p>
                        <p class="mb-3 leading-relaxed">Typically, this can range from a few months to a few years in simple equivalent monthly instalments.
                            You can use the funds from a personal loan however you choose - to fund a vacation, buy a gadget, pay for medical treatment, use for home renovation, spend on a wedding, finance your children's education, and so on.
                        </p>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg px-6 py-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-500 text-lg font-bold title-font mb-1">The Card That Suits You!</h2>
                        <h2 class="text-gray-500 text-sm font-bold title-font mb-5">Best Credit Card In India</h2>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div class="relative mb-2 w-full">
                                <label for="firstname" class="leading-7 text-sm font-semibold text-gray-600">First Name</label>
                                <input type="text" id="firstname" name="firstname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="lastname" class="leading-7 text-sm font-semibold text-gray-600">Last Name</label>
                                <input type="text" id="lastname" name="lastname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div class="relative mb-2 w-full">
                                <label for="contact" class="leading-7 font-semibold text-sm text-gray-600">Contact</label>
                                <input type="number" id="contact" name="contact" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="email" class="leading-7 font-semibold text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div class="relative mb-2 w-full">
                                <label for="birthdate" class="leading-7 font-semibold text-sm text-gray-600">Birth Date</label>
                                <input type="number" id="birthdate" name="birthdate" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="averageannualincome" class="leading-7 font-semibold text-sm text-gray-600">Average Annual Income</label>
                                <input type="number" id="averageannualincome" name="averageannualincome" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-42'>
                            <button class="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                        </div>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
