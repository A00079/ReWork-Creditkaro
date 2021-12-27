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
                        <p class="mb-3 font-bold leading-relaxed text-left text-gray-500 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
                        <p class="mb-3 font-bold leading-relaxed text-left text-gray-500 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
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
                <div class="container px-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4">
                            <div class="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EASY</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EASY FOR ALL</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4">
                            <div class="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EXCLUSIVE</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EXCLUSIVE OFFERS</h1>
                                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4">
                            <div class="h-full bg-gray-100  shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SWIFT</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">SWIFT AND BRISK</h1>
                                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4">
                            <div class="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EXTENSIVE</h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">EXTENSIVE RESEARCH</h1>
                                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
