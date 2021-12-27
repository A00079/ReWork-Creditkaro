import React from 'react';
import { Link } from 'react-router-dom';
import { SavingAccountForm, Documents, StepsInSavingAccount, SavingAccountScore, WhatIsSavingAccount, TypesSavingAccount, StepsSavingAccount, SavingAccountCampaigns } from './Components';
const SavingAccount = (props) => {
    return (
        <React.Fragment>
            <div className='relative'>
                <SavingAccountForm />
                <SavingAccountScore />
                <WhatIsSavingAccount />
                {/* <Documents /> */}
                <StepsInSavingAccount />
                <StepsSavingAccount />
                {/* <TypesSavingAccount /> */}
                <SavingAccountCampaigns />
                <Link to='/'>
                    <button title="Back To Home" className='fixed bottom-5 right-5 bg-yellow-500 border-2 rounded-full px-4 py-4'><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default SavingAccount;
