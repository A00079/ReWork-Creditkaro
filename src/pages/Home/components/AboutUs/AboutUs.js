import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/about-us.json';

const AboutUs = () => {
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
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-40 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">About Our Company</h2>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">About Us</h1>
                        <p class="mb-3 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher. Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUs;