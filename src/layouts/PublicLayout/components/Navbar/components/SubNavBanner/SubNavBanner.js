import React from 'react';
import Lottie from "react-lottie";
import manRunning from '../../../../../../assets/animations/man-running.json';
import Marquee from "react-fast-marquee";

const SubNavBanner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: manRunning,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <React.Fragment>
            <div style={{ zIndex: "99999" }} class="bg-indigo-600 pt-11 ml-12 md:pt-14 lg:pt-14 xl:pt-14">
                <div class="mx-auto py-0 px-0 sm:px-6 lg:px-0">
                    <div class="flex items-center justify-center flex-wrap">
                        <div class="w-0 flex-1 flex items-center">
                            <p class="ml-0 font-medium text-white truncate w-full">
                                <span class="md:inline">
                                    <Marquee gradient={false} speed={70}>
                                        <div class="flex">
                                            <div class="w-4 h-4 mt-4 mb-0 p-0 mr-8 md:ml-0 lg:ml-0 xl:ml-0 ml-64 vert-move">
                                                <img src="./img/rupee.png" id="loading" class="" />
                                            </div>
                                            <div class="mr-4 pt-1">
                                                <Lottie options={defaultOptions} lotti={manRunning} height={25} width={25} />
                                            </div>
                                            <small class="text-white mt-2"
                                            >Big news! We're excited to announce a brand new
                                            product.</small
                                            >
                                        </div>
                                    </Marquee>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SubNavBanner;