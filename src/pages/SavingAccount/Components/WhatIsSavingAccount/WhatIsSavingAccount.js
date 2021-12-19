import React from 'react'

export default function Whatiscreditcard(props) {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-2 pb-40 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-5 font-bold text-indigo-600">How Does It Work ?
                        </h1>
                        <p class="mb-3 leading-relaxed">Savings and other bank accounts are valuable sources of capital that financial firms can use to lend to others. You can find savings accounts for this reason at almost any bank or credit union, whether they are traditional brick-and-mortar establishments or only operate online. Savings accounts are also available at certain securities and trading businesses.</p>
                        <p class="mb-3 leading-relaxed">The amount you would receive on a savings account is varied in general. Banks and credit unions can normally increase or lower their savings account rate at any time, with the exception of campaigns that offer a fixed rate until a specific date.</p>
                        {/* <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
