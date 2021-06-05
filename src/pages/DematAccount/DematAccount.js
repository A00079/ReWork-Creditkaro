import React from 'react'
import { DematAccountForm, Documents, StepsInDematAccount, DematAccountScore, WhatIsDematAccount, BenefitsDematAccount, StepsDematAccount, DematAccountCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <DematAccountForm />
            <DematAccountScore />
            <WhatIsDematAccount />
            <Documents />
            {/* <StepsDematAccount /> */}
            <DematAccountCampaigns />
            <StepsInDematAccount />
            <BenefitsDematAccount />
        </React.Fragment>
    )
}

