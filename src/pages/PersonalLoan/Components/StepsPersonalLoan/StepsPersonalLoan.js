import React from 'react';

export default function Stepscreditcard() {
    return (
        <>
            <div class="container mx-auto flex w-full mb-7 flex-wrap px-8">
                <div class="flex flex-wrap w-full">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1
                            class="sm:text-3xl text-2xl font-bold title-font text-indigo-900 lg:mb-0 mb-4"
                        >
                            Simple Steps Personal Loan<br />
                            <div class="text-sm text-gray-500 mt-1">
                                How To Apply
                                Instant Personal Loan online.
                            </div>
                        </h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap w-full">
                        <div class="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
                            <div class="flex relative pb-12">
                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p class="leading-relaxed font-bold text-gray-700">Personal Loan Application Process Online</p>
                                    <p>
                                        If the personal loan applicant has an existing relationship with the financial lender, he/she can apply for a personal loan via his/her net banking account and could possibly be eligible for a pre-approval. For other customers, they can apply for a personal loan online by following the steps mentioned below:
                                        <br />
                                        •	Visit the website of the financial lender.<br />
                                        •	Under the loan section, choose personal loans.<br />
                                        •	Click on the ‘apply now’ option.<br />
                                        •	Enter the details in the personal loan application form and submit it to the bank.<br />
                                        •	The bank will assess the eligibility of the applicant and request for the submission of the required KYC documents and income documents.<br />
                                        •	If the applicant is found eligible, the bank will disburse the loan amount to the bank account of the applicant, as mentioned in the application form.

                                    </p>
                                </div>
                            </div>
                            <div class="flex relative pb-12">
                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                    <p class="leading-relaxed font-bold text-gray-700">Personal loan application offline</p>
                                    <p>
                                        Listed below is the process of applying for a personal loan at the branch of the financial lender:
                                        <br />
                                        •	Visit the branch of the financial lender.<br />
                                        •	Procure the personal loan application form and enter all the required details.<br />
                                        •	Submit relevant documents that prove one’s income, age, address and identity.<br />
                                        •	The lender will then verify the documents and check the eligibility of the applicant.<br />
                                        •	The loan amount will be transferred to the bank account of the applicant if he/she is found eligible.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-5">
                            <div class="flex flex-col text-center mt-3 w-full mb-3">
                                <h1
                                    class="sm:text-3xl md:text-2xl text-left font-bold title-font mb-0 text-indigo-900"
                                >
                                    Documents required for personal loan application
                                </h1>
                                <p
                                    class="text-left text-gray-400 font-semibold leading-relaxed text-base"
                                >
                                    Below are the documents required for authentication.
                                </p>
                            </div>
                            <div className='identityproof flex flex-col justify-start'>
                                <div class="p-2 pl-0 w-40">
                                    <div class="bg-indigo-900 rounded flex p-2 h-12 items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="3"
                                            class="text-white w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="text-xs title-font text-white font-medium"
                                        >Documents Required</span>
                                    </div>
                                </div>
                                <div class="p-2 pl-0 w-full">
                                    <div class="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                        {/* <div class="w-16 h-16 bg-gray-100 rounded-lg  mr-4">

                                        </div> */}
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font text-sm font-medium">Identity Proof (Anyone): Aadhaar card/ Passport/ PAN CARD/ Voter ID card</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 pl-0 w-full">
                                    <div class="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                        {/* <div class="w-28 h-16 bg-gray-100 rounded-lg  mr-4">
                                        </div> */}
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 text-sm title-font font-medium">Address Proof: Aadhaar/Passport/ Driving license, Phone bill, electricity bill, Rental agreement & Two recent passport-sized photographs</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 pl-0 w-full">
                                    <div class="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                        {/* <div class="w-16 h-16 bg-gray-100 rounded-lg  mr-4">
                                        </div> */}
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 text-sm title-font font-medium">Financial documents: Salaried: Latest three-month salary slip</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
