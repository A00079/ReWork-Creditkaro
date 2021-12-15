import React from 'react'
import { CreditForm, CreditScore, WhatIsCreditCard,CreditRedeem, CreditProsCons, TypesCreditCards, StepsCreditCard, CreditCampaigns, CreditLimit } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <CreditForm />
            <CreditScore />
            <WhatIsCreditCard />
            <StepsCreditCard />
            <TypesCreditCards />
            <CreditCampaigns />
            <CreditLimit />
            <CreditProsCons />
            <CreditRedeem />
        </React.Fragment>
    )
}

