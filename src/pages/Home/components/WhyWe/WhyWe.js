import React, {useState} from 'react';
import '../../../../App.css'
const WhyWe = () => {
    const [products, setProducts] = useState([
        {
            'title': 'Credit Card',
            'img': 'credit-card.png'
        },
        {
            'title': 'Demat Account',
            'img': 'demat-acct-home.png'
        },
        {
            'title': 'Health Care',
            'img': 'healthcare.svg'
        },
        {
            'title': 'Home Loan',
            'img': 'mobilehomeloan.png'
        },
        {
            'title': 'Life Insurance',
            'img': 'lifeinsurance.png'
        },
        {
            'title': 'Personal Loan',
            'img': 'personalloan.png'
        },
        {
            'title': 'Saving Account',
            'img': 'savings.png'
        },
        {
            'title': 'Mutual Funds',
            'img': 'homeloan.png'
        }
    ])
    return (
        <React.Fragment>


            <div class="min-h-screen bg-white">
                <main>
                    <section class="juice3 bg-white bg-opacity-90 py-10">
                        <div class="container mx-auto px-4 flex flex-col lg:flex-row">
                            <div class="juice relative lg:w-2/3 rounded-xl  bg-cover p-8 md:p-16">
                                <p class="max-w-sm text-secondary text-3xl md:text-4xl font-semibold">Active Summer With Juice Milk 300ml</p>
                                <p class="max-w-xs pr-10 text-secondary font-semibold mt-8">New arrivals with naturre fruits, juice milks, essential for summer</p>
                                <button class="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>

                            </div>
                            <div class="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
                                <div class="max-w-sm">
                                    <p class="text-3xl md:text-4xl font-semibold uppercase">20% sale off</p>
                                    <p class="mt-8 font-semibold">Syncthetic seeds<br />2.0 OZ</p>
                                    <button class="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="container px-4 pt-12 bg-white">
                        <div class="relative flex items-end font-bold">
                            <h2 class="text-2xl">Our Products</h2>
                            <a href class="ml-10 flex items-center text-gray-400">
                                <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                            </a>
                        </div>
                        <div class="mt-10">
                            <ul class="-m-3.5 grid sm:grid-cols-4 grid-cols-2 gap-4">
                                {
                                    products.map((el, index) => {
                                        return (
                                            <li class="h-full w-full p-5 cursor-pointer bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
                                                <img class="max-h-20" src={`/img/ourproduct/${el.img}`} alt="" />
                                                <span class="font-semibold">{el.title}</span>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </section>

                    {/* <section class="container mx-auto pt-12">
                        <div class="relative flex items-end font-bold">
                            <h2 class="text-2xl">Featured Brands</h2>
                            <a href class="ml-10 flex items-center text-gray-400">
                                <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                            </a>
                        </div>
                        <div class="mt-10">
                            <ul class="-m-3.5 flex">
                                <li class="product m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li class="product2 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li class="product4 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li class="product3 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                            </ul>
                        </div>
                    </section> */}
                </main>
            </div>
        </React.Fragment>
    )
}

export default WhyWe;