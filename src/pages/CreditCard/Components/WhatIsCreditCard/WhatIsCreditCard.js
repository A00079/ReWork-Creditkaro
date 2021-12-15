import React from 'react'

export default function Whatiscreditcard(props) {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded w-60" alt="hero" src="/img/credit-card.png" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Credit Card
                            
                        </h1>
                        <p class="mb-3 leading-relaxed">A credit card is a small rectangular piece of plastic or metal provided by a bank or financial services business that allows cardholders to borrow funds to pay for products and services from retailers who accept credit cards. Credit cards require cardholders to repay the borrowed funds, plus any related interest, as well as any extra agreed charges, in full by the billing date or over time. Credit cards function as a micro loan tool, allowing individuals to make purchases with the condition of repaying them within a certain time period. If the required amount is paid within a certain time frame, no interest is paid (interest-free period). </p>

                        <p class="mb-3 leading-relaxed">A credit card is a tool that allows you to perform fast credit-based transactions.</p>
                        <p class="mb-3 leading-relaxed">Unlike debit cards, which are linked to your bank accounts and debit the corresponding amount for each transaction, credit cards allow you to make purchases on credit regardless of your account balance. These payments, however, are repayable at the conclusion of a pre-specified credit period, and each credit card has a credit limit that cannot be exceeded.</p>

                        {/* <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
