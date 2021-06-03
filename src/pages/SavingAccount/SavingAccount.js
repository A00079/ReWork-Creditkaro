import React from 'react'
import { SavingAccountForm, SavingAccountScore, WhatIsSavingAccount, TypesSavingAccount, StepsSavingAccount, SavingAccountCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <SavingAccountForm />
            <SavingAccountScore />
            <WhatIsSavingAccount />
            <StepsSavingAccount />
            <TypesSavingAccount />
            <SavingAccountCampaigns />
        </React.Fragment>
    )
}

