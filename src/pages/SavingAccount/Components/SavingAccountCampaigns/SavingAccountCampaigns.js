import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Axis Bank",
    "Equitas Small Finance Bank",
    "Fi",
    "Fincare Small Finance Bank",
    "HDFC Bank",
    "IndusInd bank",
    "Kotak Bank"
];
const cardnames = [
    "2.50%",
    "3%",
    "3-4%",
    "4%",
    "4 - 6%",
    "5.1%",
    "7%"
];
export default function SavingAccountCampaigns(props) {
    const [bankName, setBankName] = React.useState([]);
    const [cardName, setCardName] = React.useState([]);
    const [cardsDetailData, setCardsDetailData] = React.useState([
        {
            "card_name": "IndusInd Bank Savings Account",
            "img": "IndusIndBankSavingsAccount.png",
            "interest_rate": "4 - 6%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "IndusInd bank"
        },
        {
            "card_name": "Fi",
            "img": "Fi.jpg",
            "interest_rate": "5.1%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Fi"
        },
        {
            "card_name": "Kotak 811 Savings Account",
            "img": "Kotak811SavingsAccount.png",
            "interest_rate": "4%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Kotak Bank"
        },
        {
            "card_name": "Fincare Small Finance Bank",
            "img": "FincareSmallFinanceBank.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Fincare Small Finance Bank"
        },
        {
            "card_name": "HDFC Bank InstaSavings Account",
            "img": "HDFCBankInstaSavingsAccount.jpg",
            "interest_rate": "3-4 %*",
            "minimum_balance": "2500 - 25000",
            "aoc": "0",
            "link": "",
            "type": "HDFC Bank"
        },
        {
            "card_name": "ASAP Instant Savings Account",
            "img": "ASAPInstantSavingsAccount.png",
            "interest_rate": "3%",
            "minimum_balance": "NR 15000",
            "aoc": "0",
            "link": "",
            "type": "Axis Bank"
        },
        {
            "card_name": "Equitas Bank Selfe Savings Account",
            "img": "EquitasBankSelfeSavingsAccount.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Equitas Small Finance Bank"
        }
    ]);
    const [copyCardsDetailData, setCopycardsDetailData] = React.useState([
        {
            "card_name": "IndusInd Bank Savings Account",
            "img": "IndusIndBankSavingsAccount.png",
            "interest_rate": "4 - 6%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "IndusInd bank"
        },
        {
            "card_name": "Fi",
            "img": "Fi.jpg",
            "interest_rate": "5.1%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Fi"
        },
        {
            "card_name": "Kotak 811 Savings Account",
            "img": "Kotak811SavingsAccount.png",
            "interest_rate": "4%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Kotak Bank"
        },
        {
            "card_name": "Fincare Small Finance Bank",
            "img": "FincareSmallFinanceBank.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Fincare Small Finance Bank"
        },
        {
            "card_name": "HDFC Bank InstaSavings Account",
            "img": "HDFCBankInstaSavingsAccount.jpg",
            "interest_rate": "3-4%*",
            "minimum_balance": "2500 - 25000",
            "aoc": "0",
            "link": "",
            "type": "HDFC Bank"
        },
        {
            "card_name": "ASAP Instant Savings Account",
            "img": "ASAPInstantSavingsAccount.png",
            "interest_rate": "3%",
            "minimum_balance": "NR 15000",
            "aoc": "0",
            "link": "",
            "type": "Axis Bank"
        },
        {
            "card_name": "Equitas Bank Selfe Savings Account",
            "img": "EquitasBankSelfeSavingsAccount.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "",
            "type": "Equitas Small Finance Bank"
        }
    ]);

    const handleChangeBank = (event) => {
        const {
            target: { value },
        } = event;
        setBankName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeCard = (event) => {
        const {
            target: { value },
        } = event;
        setCardName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleApplyFilter = () => {
        console.log('bankName', bankName);
        let filterData = [];
        let filterByCard = [];
        if (bankName.length !== 0) {
            filterData = copyCardsDetailData.filter((el, index) => {
                return bankName.includes(el.type);
            });
            setCardsDetailData(filterData);
        }

        if (filterData.length == 0) {
            filterData = copyCardsDetailData.filter((el, index) => {
                return cardName.includes(el.interest_rate);
            });
            setCardsDetailData(filterData);
        } else {
            if (cardName.length !== 0) {
                filterByCard = filterData.filter((el, index) => {
                    return cardName.includes(el.interest_rate);
                });
                setCardsDetailData(filterByCard);
            }
        }
    }

    const handleCancelFilter = () => {
        setCardsDetailData(copyCardsDetailData);
    }
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">WE FOUND THE BEST SAVING ACCOUNT </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className='px-10 mb-10'>
                        <div className='bg-white px-5 shadow-md rounded-md py-5 w-full border-2 border-gray-200'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-start items-center space-x-5'>
                                    <p className='text-sm font-bold'>Filter By -</p>
                                    <div className='w-40'>
                                        <FormControl className='w-40'>
                                            <InputLabel id="demo-multiple-checkbox-label">Banks</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={bankName}
                                                onChange={handleChangeBank}
                                                input={<OutlinedInput label="Banks" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        <Checkbox checked={bankName.indexOf(name) > -1} />
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='w-40'>
                                        <FormControl className='w-40'>
                                            <InputLabel id="demo-multiple-checkbox-label">Interest Rate</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={cardName}
                                                onChange={handleChangeCard}
                                                input={<OutlinedInput label="Interest Rate" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {cardnames.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        <Checkbox checked={cardName.indexOf(name) > -1} />
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleApplyFilter()} className='bg-green-600 text-white rounded-md mr-5 px-4 py-2 text-xs'>
                                        Apply Filters
                                    </button>
                                    <button onClick={() => handleCancelFilter()} className='bg-red-600 text-white rounded-md px-4 py-2 text-xs'>
                                        Clear Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            cardsDetailData.map((el, index) => {
                                return (
                                    <div class="p-4 lg:w-1/2 w-full">
                                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
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
                                                    <button class="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Apply Now</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
