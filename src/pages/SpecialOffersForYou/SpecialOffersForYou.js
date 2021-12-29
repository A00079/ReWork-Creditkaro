import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const SpecialOffersForYou = (props) => {
    const [cardsDetailData, setCardsDetailData] = React.useState([
        {
            "card_name": "Axis Bank MY Zone Credit Card",
            "img": "AxisBankMYZoneCreditCard.png",
            "card_type": "Shopping",
            "fee": ["1st Year Fee-500", "Renewal Fee-500"],
            "eligibility": "7.5 lakh onwards",
            "link": "",
            "type": "Axis Bank"
        },
        {
            "card_name": "Axis Bank Neo Credit Card",
            "img": "AxisBankNeoCreditCard.jpg",
            "card_type": "Shopping",
            "fee": ["1st Year Fee-250", "Renewal Fee-250"],
            "eligibility": "4.20 Lakh*",
            "link": "",
            "type": "Axis Bank"
        },
        {
            "card_name": "Axis Bank Select Credit Card",
            "img": "AxisBankSelectCreditCard.png",
            "card_type": "Travel",
            "fee": ["1st Year Fee-0", " Renewal Fee-3000"],
            "eligibility": "9 lakh onwards",
            "link": "",
            "type": "Axis Bank"
        },
        {
            "card_name": "ICICI Bank Platinum Chip Credit Card",
            "img": "ICICIBankPlatinumChipCreditCard.jpg",
            "card_type": "LifeStyle",
            "fee": ["1st Year Fee-0", " Renewal Fee-0"],
            "eligibility": "2.5 Lakh Onwards",
            "link": "",
            "type": "ICICI Bank Credit Cards"
        },
        {
            "card_name": "ICICI Bank HPCL Coral Credit Card",
            "img": "ICICIBankHPCLCoralCreditCard.jpg",
            "card_type": "Fuel",
            "fee": ["1st Year Fee-199 + GST", " Renewal Fee-199 + GST(2nd year onwards)"],
            "eligibility": "3 Lakh Onwards",
            "link": "",
            "type": "ICICI Bank Credit Cards"
        },
        {
            "card_name": "ICICI Bank Coral Credit Cards",
            "img": "ICICIBankCoralCreditCards.jpg",
            "card_type": "N/A",
            "fee": ["3 Lakh Onwards"],
            "eligibility": "4.20 Lakh*",
            "link": "",
            "type": "ICICI Bank Credit Cards"
        },
        {
            "card_name": "Axis Bank ACE Credit Card",
            "img": "AxisBankACECreditCard.jpg",
            "card_type": "Cashback",
            "fee": ["1st Year Fee-499 ", "Renewal Fee-499"],
            "eligibility": "6 lakh onwards",
            "link": "",
            "type": "Axis Bank"
        }
    ]);
    const [cardsDetailData_DA, setCardsDetailData_DA] = React.useState([
        {
            "card_name": "HDFC SECURITY*",
            "img": "hdfcsecurity.jpg",
            "exchange": "BSE|NSE",
            "trading_aof": "0",
            "demat_aof_accoun": "0",
            "link": "https://allinone.hdfcsec.com/lp/open-trading-account1?utm_Source=Affiliate&utm_Medium=SS_17&utm_Campaign=Emailer&utm_Term=CPA_Dec.&utm_Content=cr17",
            "type": "HDFC"
        },
        {
            "card_name": "AXIS SECURITY*",
            "img": "axissecurity.png",
            "exchange": "BSE|NSE",
            "trading_aof": "0",
            "demat_aof_accoun": "0",
            "link": "https://simplehai.axisdirect.in/SuperOptions-trading-account?utm_source=emailer&utm_medium=Convonix_1348_2860_2860_{sub_aff_id}_&utm_campaign=open-account-Superoptionsmailer1",
            "type": "AXIS"
        },
        {
            "card_name": "ICICI DIRECT*",
            "img": "icicidirect.jpg",
            "exchange": "BSE|NSE",
            "trading_aof": "0",
            "demat_aof_accoun": "0",
            "link": "https://play.google.com/store/apps/details?id=com.icici.direct&referrer=utm_source=candid-{aff_id}_{sub_aff_id}_{aff_sub1}&utm_medium=banner&utm_term=oao&utm_content=na&utm_campaign=na",
            "type": "ICICI"
        },
        {
            "card_name": "GROWW",
            "img": "groww.png",
            "exchange": "BSE|NSE",
            "trading_aof": "0",
            "demat_aof_accoun": "0",
            "link": "https://groww.in/?%243p=a_optimidea_network&%24aaid&~click_id=61cc3f615076820342e4deb7&~secondary_publisher=174&_branch_match_id=976395917135034117&_branch_referrer=H4sIAAAAAAAAAxXKuw7CIBQA0K%2BpYykFQU2Ik6NDO7gSHldLQSCAIf698cxnay3XC0KvknofVc5jcNGjZTmver0%2FdtDXYaYkCyVTbu7tLCgZofVU%2FGHgNxOc8dJZwbAx5MnwceLsNE%2BEzkAtaP5PFUyKVpWvzB8dXN2gCMzpDzMqz0d8AAAA",
            "type": "GROWW",
        }
    ]);
    const [cardsDetailData_PL, setCardsDetailData_PL] = React.useState([
        {
            "card_name": "Bajaj Finserv Personal Loan",
            "img": "BajajFinservPersonalLoan.png",
            "interest_rate": "12.99* %",
            "processing_fee": "1.50% - 3.99% %*",
            "Tenure": "5 years",
            "link": "",
            "type": "Bajaj Finserv"
        },
        {
            "card_name": "EarlySalary Personal Loan",
            "img": "EarlySalaryPersonalLoan.jpg",
            "interest_rate": "24 - 30 %",
            "processing_fee": "150 - 300 %*",
            "Tenure": "1 years",
            "link": "",
            "type": "EarlySalary"
        }
    ]);
    const [cardsDetailData_SA, setCardsDetailData_SA] = React.useState([
        // {
        //     "card_name": "IndusInd Bank Savings Account",
        //     "img": "IndusIndBankSavingsAccount.png",
        //     "interest_rate": "4 - 6%*",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "IndusInd bank"
        // },
        {
            "card_name": "Fi",
            "img": "Fi.jpg",
            "interest_rate": "5.1%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://play.google.com/store/apps/details?id=com.epifi.paisa&referrer=af_tranid%3Du5-AhEa21_-o8ZpbTWfgHw%26pid%3Doptimidea_int%26af_siteid%3D174%26af_click_lookback%3D7d%26clickid%3D61cc3f0bf6c4230342d7a1bd%26af_installpostback%3Dfalse%26af_web_id%3D407b8710-9c6a-440e-9d54-4664c35b3c05-i",
            "type": "Fi"
        },
        {
            "card_name": "Kotak 811 Savings Account",
            "img": "Kotak811SavingsAccount.png",
            "interest_rate": "4%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://www.kotak.com/811-savingsaccount-ZeroBalanceAccount/811/ahome2.action?source=VKYCIL&banner=ILVKYClaunch&pubild=VKYClaunchmailer_3880_3880",
            "type": "Kotak Bank"
        },
        // {
        //     "card_name": "Fincare Small Finance Bank",
        //     "img": "FincareSmallFinanceBank.jpg",
        //     "interest_rate": "7%",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "Fincare Small Finance Bank"
        // },
        {
            "card_name": "HDFC Bank InstaSavings Account",
            "img": "HDFCBankInstaSavingsAccount.jpg",
            "interest_rate": "3-4%*",
            "minimum_balance": "2500 - 25000",
            "aoc": "0",
            "link": "https://v1.hdfcbank.com/htdocs/common/saving-account/index.html?LGCode=MKTG&mc_id=paid_Affiliate_1348_2860_2860_{sub_aff_id}_&utm_source=Affiliate_1348_2860_2860_{sub_aff_id}_&utm_medium=paid_Affiliate&utm_campaign=NTB_Affiliate_1348_Savings_Account_&utm_content=NTB_SA_IMP_1348_Banner_Ad1#SA_Landing",
            "type": "HDFC Bank"
        },
        {
            "card_name": "ASAP Instant Savings Account",
            "img": "ASAPInstantSavingsAccount.png",
            "interest_rate": "3%",
            "minimum_balance": "NR 15000",
            "aoc": "0",
            "link": "https://leap.axisbank.com/verification?query=5ee36547c0ce0dd6c0a2812d&utm_source=CXAFFDSA&utm_medium=email&utm_campaign=DSA-Affiliate-VKYC&utm_term=2860_2860&utm_content=1348",
            "type": "Axis Bank"
        },
        {
            "card_name": "Equitas Bank Selfe Savings Account",
            "img": "EquitasBankSelfeSavingsAccount.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://inet.equitasbank.com/Selfe/?tpp=CREDITK12860_2860_{sub_aff_id}_{aff_sub3}",
            "type": "Equitas Small Finance Bank"
        }
    ]);

    useEffect(() => {
        console.log("props", props);
    }, [])
    return (
        <React.Fragment>
            <div class="flex min-h-screen">
                <nav class="w-64 flex-shrink-0 hidden sm:block">
                    <div class="flex-auto bg-gray-900 h-full">
                        <div class="flex flex-col overflow-y-auto">
                            <ul class="relative m-0 p-0 list-none h-full">
                                <li class="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                                    Navigations
                                </li>
                                <li class="text-white p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                                    <div class="mr-4 flex-shrink-0 my-auto">
                                        <svg class="fill-current w-5 h-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                                    </div>
                                    <Link to='/'>

                                        <div class="flex-auto my-1">
                                            <span>Home</span>
                                        </div>
                                    </Link>
                                </li>
                                <li class="p-4 w-full flex relative shadow-sm">
                                    <div class="flex-auto my-1">
                                        <span class="text-white font-medium">Others</span>
                                    </div>
                                </li>
                                <Link to='/credit-card'>

                                    <div class={props.location.type == 'credit-card' ? "text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer" : "text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"}>
                                        <div class="mr-4 my-auto">
                                            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                                        </div>

                                        <div class="flex-auto my-1">
                                            <span>Credit Cards</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/personal-loan'>

                                    <div class={props.location.type == 'personal-loan' ? "text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer" : "text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"}>
                                        <div class="mr-4 my-auto">
                                            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                                        </div>
                                        <div class="flex-auto my-1">
                                            <span>Personal Loan</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/home-loan'>

                                    <div class={props.location.type == 'home-loan' ? "text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer" : "text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"}>
                                        <div class="mr-4 my-auto">
                                            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></svg>            </div>
                                        <div class="flex-auto my-1">
                                            <span>Home Loan</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/demat-account'>

                                    <div class={props.location.type == 'demat-account' ? "text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer" : "text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"}>
                                        <div class="mr-4 my-auto">
                                            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>            </div>
                                        <div class="flex-auto my-1">
                                            <span>Demat Account</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/saving-account'>

                                    <div class={props.location.type == 'saving-account' ? "text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer" : "text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer"}>
                                        <div class="mr-4 my-auto">
                                            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></svg>
                                        </div>
                                        <div class="flex-auto my-1">
                                            <span>Saving Account</span>
                                        </div>
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div class="flex flex-col w-full">
                    <header class="text-white bg-yellow-300 sticky left-auto top-0 right-0">
                        <div class="h-12 px-6 flex relative items-center justify-between">
                            <div class="flex items-center p-4">
                                <span class="text-lg font-bold sm:text-2xl  tracking-wide">Best Credit Cards In India</span>
                            </div>
                            <div>
                                <button class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                    <img class="h-full w-full object-cover" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div id='content-main'>
                        {/* <div className='flex flex-col  pl-20 pr-10 justify-start space-y-5 items-center w-full'>
                            {
                                [...new Array(3)].map((el, index) => {
                                    return (
                                        <div class="p-2 w-full">
                                            <div class="h-full bg-purple-100 shadow-xl flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src="https://dummyimage.com/80x80" />
                                                <div class="flex-grow">
                                                    <h2 class="text-indigo-600 title-font font-bold">Axsis Bank MY Zone Credit Card</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Card Type</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Fee</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <h2 class="text-gray-600 title-font font-bold">Eligiblity</h2>
                                                    <p class="text-gray-500">UI Designer</p>
                                                </div>
                                                <div class="flex-grow">
                                                    <button class="text-white text-sm p-2 rounded-md bg-indigo-600 title-font font-medium">Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div> */}
                        {
                            props.location.type == 'credit-card' ?
                                <div className='flex flex-wrap px-10 text-lg font-bold text-gray-500'>No Offers Avaliable</div>
                                // <div class="flex flex-wrap px-10">
                                //     {
                                //         cardsDetailData.map((el, index) => {
                                //             return (
                                //                 <div class="p-4 lg:w-1/2 w-full ">
                                //                     <div class="bg-white border-2 border-gray-300 rounded-md p-4 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                //                         <img alt="team" class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4" src={`/img/creditCards/${el.img}`} />
                                //                         <div class="flex-grow sm:pl-8">
                                //                             <h2 class="w-full title-font font-bold text-lg  text-indigo-700">{el.card_name}</h2>
                                //                             <h3 class="text-gray-500 mb-1 text-sm"><span class="text-gray-800 font-bold mb-3 text-sm">Card Type</span> : {el.card_type}</h3>
                                //                             <p class="mb-1 flex flex-col items-center sm:items-start">
                                //                                 <p class="text-gray-800 font-bold mb-1 text-sm">Fee</p>
                                //                                 <p class="text-gray-500 text-sm">{el.fee[0]}</p>
                                //                                 <p class="text-gray-500 text-sm">{el.fee[1]}</p>
                                //                             </p>
                                //                             <h3 class="text-gray-500 mb-1 text-sm">
                                //                                 <span class="text-gray-800 font-bold mb-3 text-sm">
                                //                                     Eligibility
                                //                                 </span> : {el.eligibility}
                                //                             </h3>
                                //                             <span class="inline-flex">
                                //                                 <button class="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><a href={el.link} target='_blank'>
                                //                                     Apply Now
                                //                                 </a></button>
                                //                             </span>
                                //                         </div>
                                //                     </div>
                                //                 </div>
                                //             )
                                //         })
                                //     }
                                // </div> 
                                : ""
                        }
                        {
                            props.location.type == 'demat-account' ?
                                <div class="flex flex-wrap px-10">
                                    {
                                        cardsDetailData_DA.map((el, index) => {
                                            return (
                                                <div class="p-4 lg:w-1/2 w-full">
                                                    <div class="bg-white border-2 border-gray-300 rounded-md p-4 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                        <img alt="team" class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4" src={`/img/dematAccounts/${el.img}`} />
                                                        <div class="flex-grow sm:pl-8">
                                                            <h2 class="w-full title-font font-bold text-lg  text-indigo-700">{el.card_name}</h2>
                                                            <h3 class="text-gray-500 mb-1 text-sm"><span class="text-gray-800 font-bold mb-3 text-sm">Exchange</span> : {el.exchange}</h3>
                                                            <p class="mb-1 flex flex-col items-center sm:items-start">
                                                                <p class="text-gray-800 font-bold mb-1 text-sm">Trading AOF</p>
                                                                <p class="text-gray-500 text-sm">{el.trading_aof}</p>
                                                            </p>
                                                            <h3 class="text-gray-500 mb-1 text-sm">
                                                                <span class="text-gray-800 font-bold mb-3 text-sm">
                                                                    Demat AOF
                                                                </span> : {el.demat_aof_accoun}
                                                            </h3>
                                                            <span class="inline-flex">
                                                                <button class="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><a href={el.link} target='_blank'>
                                                                    Apply Now
                                                                </a></button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div> : ""
                        }
                        {
                            props.location.type == 'personal-loan' ?
                                <div className='text-lg font-bold text-gray-500'>No Offers Avaliable</div>

                                // <div class="flex flex-wrap px-10">
                                //     {
                                //         cardsDetailData_PL.map((el, index) => {
                                //             return (
                                //                 // <div class="p-4 lg:w-1/2 w-full">
                                //                 //     <div class="bg-white border-2 border-gray-300 rounded-md p-4 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                //                 //         <img alt="team" class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4" src={`/img/personalLoans/${el.img}`} />
                                //                 //         <div class="flex-grow sm:pl-8">
                                //                 //             <h2 class="w-full title-font font-bold text-lg  text-indigo-700">{el.card_name}</h2>
                                //                 //             <h3 class="text-gray-500 mb-1 text-sm"><span class="text-gray-800 font-bold mb-3 text-sm">Interest Rate</span> : {el.interest_rate}</h3>
                                //                 //             <p class="mb-1 flex flex-col items-center sm:items-start">
                                //                 //                 <p class="text-gray-800 font-bold mb-1 text-sm">Processing Fee</p>
                                //                 //                 <p class="text-gray-500 text-sm">{el.processing_fee}</p>
                                //                 //             </p>
                                //                 //             <h3 class="text-gray-500 mb-1 text-sm">
                                //                 //                 <span class="text-gray-800 font-bold mb-3 text-sm">
                                //                 //                     Tenure
                                //                 //                 </span> : {el.Tenure}
                                //                 //             </h3>
                                //                 //             <span class="inline-flex">
                                //                 //                 <button class="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><a href={el.link} target='_blank'>
                                //                 //                     Apply Now
                                //                 //                 </a></button>
                                //                 //             </span>
                                //                 //         </div>
                                //                 //     </div>
                                //                 // </div>
                                //                 <div className='text-lg font-bold text-gray-500'>No Offers Avaliable</div>
                                //             )
                                //         })
                                //     }
                                // </div>
                                : ""
                        }
                        {
                            props.location.type == 'saving-account' ?
                                <div class="flex flex-wrap px-10">
                                    {
                                        cardsDetailData_SA.map((el, index) => {
                                            return (
                                                <div class="p-4 lg:w-1/2 w-full">
                                                    <div class="bg-white border-2 border-gray-300 rounded-md p-4 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                        <img alt="team" class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4" src={`/img/SavingAccounts/${el.img}`} />
                                                        <div class="flex-grow sm:pl-8">
                                                            <h2 class="w-full title-font font-bold text-lg  text-indigo-700">{el.card_name}</h2>
                                                            <h3 class="text-gray-500 mb-1 text-sm"><span class="text-gray-800 font-bold mb-3 text-sm">Interest Rate</span> : {el.interest_rate}</h3>
                                                            <p class="mb-1 flex flex-col items-center sm:items-start">
                                                                <p class="text-gray-800 font-bold mb-1 text-sm">Minimum Balance</p>
                                                                <p class="text-gray-500 text-sm">{el.minimum_balanced}</p>
                                                            </p>
                                                            <h3 class="text-gray-500 mb-1 text-sm">
                                                                <span class="text-gray-800 font-bold mb-3 text-sm">
                                                                    AOC
                                                                </span> : {el.aoc}
                                                            </h3>
                                                            <span class="inline-flex">
                                                                <button class="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><a href={el.link} target='_blank'>

                                                                    Apply Now
                                                                </a></button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div> : ""
                        }
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

export default withRouter(SpecialOffersForYou);