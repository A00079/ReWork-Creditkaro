import React from 'react'
import { CreditForm, CreditScore, WhatIsCreditCard, TypesCreditCards, StepsCreditCard, CreditCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <CreditForm />
            <CreditScore />
            <WhatIsCreditCard />
            <StepsCreditCard />
            <TypesCreditCards />
            <CreditCampaigns />
        </React.Fragment>
    )
}

