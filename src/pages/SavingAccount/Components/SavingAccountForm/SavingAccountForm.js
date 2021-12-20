import React, {useState} from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/saving-money.json';
import firebase from '../../../../firebase.js';
import { withRouter } from "react-router";

const SavingAccountform = (props) => {
    const [input, setInput] = useState({});
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Gender');
    const [otpVal, setOtpVal] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const toggleOption = (opVal) => {
        setIsOpenDrop(!isOpenDrop);
        setSelectedOption(opVal);
        setInput({ ...input, ['gender']: opVal });
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    console.log("Captcha Resolved");
                    this.onSignInSubmit();
                },
                defaultCountry: "IN",
            }
        );
    };

    const onSignInSubmit = (e) => {
        e.preventDefault();
        console.log('Inputs', input);
        if (!!input.firstname && !!input.lastname && !!input.contact && !!input.email && !!input.birthdate && !!input.averageannualincome) {
            if (input.contact.toString().length == 10) {
                setUpRecaptcha();
                let phoneNumber = "+91" + '8169029085';
                console.log(phoneNumber);
                let appVerifier = window.recaptchaVerifier;
                firebase
                    .auth()
                    .signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        // SMS sent. Prompt user to type the code from the message, then sign the
                        // user in with confirmationResult.confirm(code).
                        window.confirmationResult = confirmationResult;
                        // console.log(confirmationResult);
                        console.log("OTP is sent");
                        setIsFormSubmited(true);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert('Wrong number entered.');
            }
        } else {
            alert('All Fields are required.');
        }
    };

    const onSubmitOtp = (e) => {
        e.preventDefault();
        let otpInput = otpVal;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm
            .confirm(otpInput)
            .then(function (result) {
                // User signed in successfully.
                // console.log("Result" + result.verificationID);
                props.history.push('special-offers');

            })
            .catch(function (error) {
                console.log(error);
                alert("Incorrect OTP");
            });
    };
    return (
        <React.Fragment>
            <div id="recaptcha-container"></div>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-10 pr-0">
                        <h1 class="title-font sm:text-4xl text-3xl mb-7 font-bold text-indigo-600">Saving Account
                        </h1>
                        <div className=''>
                            <Lottie
                                options={defaultOptions}
                                height={200}
                                width={250}
                            />
                        </div>
                        <p class="mb-3 leading-relaxed">A savings account is a savings account held by a bank or other financial institution that pays interest. While these accounts often yield a low interest rate, their consistency and dependability make them an excellent choice for storing cash that you wish to have ready for short-term needs.</p>
                        <p class="mb-3 leading-relaxed">Savings plans have some restrictions on how frequently you can withdraw money, but they typically offer excellent flexibility that is ideal for establishing an emergency fund, saving for a short-term goal such as buying a car or going on vacation, or simply sweeping the excess cash in your bank account so it can earn more interest elsewhere.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg px-6 py-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-500 text-lg font-bold title-font mb-1">The Card That Suits You!</h2>
                        <h2 class="text-gray-500 text-sm font-bold title-font mb-5">Best Credit Card In India</h2>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div class="relative mb-2 w-full">
                                <label for="firstname" class="leading-7 text-sm font-semibold text-gray-600">First Name</label>
                                <input onChange={handleInputChange} type="text" id="firstname" name="firstname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="lastname" class="leading-7 text-sm font-semibold text-gray-600">Last Name</label>
                                <input onChange={handleInputChange} type="text" id="lastname" name="lastname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div class="relative mb-2 w-full">
                                <label for="contact" class="leading-7 font-semibold text-sm text-gray-600">Contact</label>
                                <input onChange={handleInputChange} type="number" id="contact" name="contact" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="email" class="leading-7 font-semibold text-sm text-gray-600">Email</label>
                                <input onChange={handleInputChange} type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div class="relative mb-2 w-full">
                                <label for="birthdate" class="leading-7 font-semibold text-sm text-gray-600">Birth Date</label>
                                <input onChange={handleInputChange} type="date" id="birthdate" name="birthdate" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-2 w-full">
                                <label for="averageannualincome" class="leading-7 font-semibold text-sm text-gray-600">Average Annual Income</label>
                                <input onChange={handleInputChange} type="number" id="averageannualincome" name="averageannualincome" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div class="relative w-full inline-block text-left">
                                <div>
                                    <button onClick={() => toggleOption()} type="button" class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {selectedOption}
                                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={isOpenDrop ? 'block' : 'hidden'}>
                                    <div class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div class="py-1" role="none">
                                            <p onClick={() => toggleOption('Male')} class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Male</p>
                                            <p onClick={() => toggleOption('Female')} class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Female</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative mb-2 w-full">
                                <div className={isFormSubmited ? 'block' : 'hidden'}>
                                    <input onChange={(e) => setOtpVal(e.target.value)} type="number" id="otp" placeholder='OTP' name="otp" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /></div>
                            </div>
                        </div>
                        <div className='w-42'>
                            {
                                isFormSubmited ? <button onClick={(e) => onSubmitOtp(e)} class="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button> :
                                    <button onClick={(e) => onSignInSubmit(e)} class="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                            }

                        </div>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default withRouter(SavingAccountform);