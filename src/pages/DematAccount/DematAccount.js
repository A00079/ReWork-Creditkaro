import React from 'react'
import { DematAccountForm, DematAccountScore, WhatIsDematAccount, TypesDematAccount, StepsDematAccount, DematAccountCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <DematAccountForm />
            <DematAccountScore />
            <WhatIsDematAccount />
            <StepsDematAccount />
            <TypesDematAccount />
            <DematAccountCampaigns />
        </React.Fragment>
    )
}

