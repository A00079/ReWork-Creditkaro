import React from 'react'

export default function Creditscore(props) {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">FACTORS AFFECTING </h2>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">Factors Affecting Personal Loan Eligibility</h1>
                        <p class="lg:w-4/3 mx-auto leading-relaxed text-base">The following are some key factors that are taken into consideration by lenders before offering a personal loan to an individual. While the weight assigned to different factors may vary from lender to lender, the following list does provide a snapshot of key factor that a lender considers when determining a prospective borrower’s eligibility for a personal loan:</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-700 title-font font-bold">Credit score</h2>
                                    <p class="text-gray-500">This is a 3 digit number that sums up how you have handled repayments of your credit cards and personal loans in the past. This score is calculated by credit bureaus and ranges from 300 to 900. The closer your credit score is to 900, the better your chances of being approved for a new personal loan</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-700 title-font font-bold">Employment Type and Employer Reputation</h2>
                                    <p class="text-gray-500">Banks usually offer personal loans to both salaried professionals working in private, government or multinational companies as well as self-employed individuals and professionals like businessmen, CA (chartered accountants), doctors, architects, etc. Salaried professionals working in renowned organisations or government employees are preferred by lenders for a personal loan because of their job stability and employer reputation</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-700 title-font font-bold">Minimum income</h2>
                                    <p class="text-gray-500">The minimum monthly income criteria set by most of the banks for salaried professionals is Rs. 15,000. Although, individuals with a minimum monthly income of Rs. 25,000 are preferred more by the banks. And for self-employed individuals, a gross annual income of minimum Rs. 5 lakh is usually needed to qualify for a personal loan</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-700 title-font font-bold">Work/Business experience</h2>
                                    <p class="text-gray-500">Many banks specify that salaried individuals need to have a minimum total work experience of 2 years with minimum 6 months in the current organisation in order to qualify for a personal loan. In case of self-employed individuals and professionals, they usually need to have been in the current business for minimum 2 years in order to be eligible for an unsecured personal loan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
