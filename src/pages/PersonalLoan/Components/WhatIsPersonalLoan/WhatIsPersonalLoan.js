import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/personal-loan.json';

export default function Whatiscreditcard(props) {
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
                <div class="container mx-auto flex px-5 pt-20 pb-40 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                        <div className=''>
                            <Lottie
                                options={defaultOptions}
                                height={250}
                                width={350}
                            />
                        </div>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Personal Loan
                        </h1>
                        <p class="mb-3 leading-relaxed">A personal loan is an amount of money you can borrow to use for a variety of purposes. For instance, you may use a personal loan to consolidate debt, pay for home renovations, or plan a dream wedding.</p>
                        <p class="mb-3 leading-relaxed">Personal loans can be offered by banks, credit unions, or online lenders. The money you borrow must be repaid over time, typically with interest. Some lenders may also charge fees for personal loans. g</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
