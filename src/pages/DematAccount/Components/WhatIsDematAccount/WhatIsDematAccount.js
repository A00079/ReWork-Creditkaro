import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/demat-acct.json';

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
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                        <div className=''>
                            <Lottie
                                options={defaultOptions}
                                height={250}
                                width={450}
                            />
                        </div>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-10 font-bold text-indigo-600">What is Demat Account ?
                        </h1>
                        <p class="mb-3 leading-relaxed">A Demat account is often referred to as a Dematerialized account. In other words, maintaining a Demat Account entail transforming or dematerializing your physical shares into an electronic representation.</p>
                        <p class="mb-3 leading-relaxed">A demat account is used to store electronic shares and securities of publicly listed firms. You can hold a wide range of investments in a Demat account, including bonds, equity shares, government securities, mutual funds, and exchange traded funds. </p>
                        <p class="mb-3 leading-relaxed">A Demat account, like a bank account, is either credited or debited when you purchase or sell shares of a company.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
