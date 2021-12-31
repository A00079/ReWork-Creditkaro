import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/why-us.json';

export default function Example() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <React.Fragment>
            <section class="text-blueGray-700 bg-white mt-20">
                <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
                    <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                        <h2 class="mb-5 text-xs font-semibold tracking-widest text-black uppercase title-font"> We are the best </h2>
                        <h1 class="mb-8 text-2xl font-black tracking-tighter text-indigo-600 md:text-5xl title-font"> Why Choose Us </h1>
                        <p class="mb-3 font-bold leading-relaxed text-left text-gray-500 "> Our goal is to become a one-stop solution provider for any issues that arise when you query about any present or upcoming financial product.   </p>
                        <p class="mb-3 font-bold leading-relaxed text-left text-gray-500 "> We assist you in selecting the right credit card for your needs. Simply filter your preferences and leave the rest to us. We'll find you the perfect match!! </p>
                    </div>
                    <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                        {/* <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" /> */}
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="sm:px-10">
                    <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 w-full">
                        <div class="p-4 w-full">
                            <div class="w-full h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EXCITING</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EXCITING OFFERS </h1>
                                <p class="leading-relaxed">We monitor the market, your preferences, and personalise the offers to deliver you the best deals available.</p>
                            </div>
                        </div>
                        <div class="p-4 w-full">
                            <div class="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PROPER</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">PROPER RESEARCH </h1>
                                <p class="leading-relaxed mb-3">Before we provide you something, we conduct extensive research. Our goal is to become a dependable source for you based on your preferences</p>
                            </div>
                        </div>
                        <div class="p-4 w-full">
                            <div class="h-full bg-gray-100  shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EASY</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EASY TO ACCESS</h1>
                                <p class="leading-relaxed mb-3">We strive to make your experience on our website as simple and interactive as possible so that you will enjoy purchasing from us</p>
                            </div>
                        </div>
                        <div class="p-4 w-full">
                            <div class="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FAST</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">FAST AND RAPID</h1>
                                <p class="leading-relaxed mb-3">We don't make you choose between options. We strive to provide you with the greatest information available in the industry in a timely manner. Our unique selling point is that we do tasks as promptly as feasible</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
