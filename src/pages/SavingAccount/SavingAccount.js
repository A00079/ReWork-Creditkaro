import React from 'react'
import { SavingAccountForm, Documents, StepsInSavingAccount, SavingAccountScore, WhatIsSavingAccount, TypesSavingAccount, StepsSavingAccount, SavingAccountCampaigns } from './Components';
export default function SavingAccount(props) {
    return (
        <React.Fragment>
            <SavingAccountForm />
            <SavingAccountScore />
            <WhatIsSavingAccount />
            {/* <Documents /> */}
            <StepsInSavingAccount />
            <StepsSavingAccount />
            {/* <TypesSavingAccount /> */}
            <SavingAccountCampaigns />
        </React.Fragment>
    )
}

