import React from 'react'
import { PersonalLoanForm, PersonalLoanScore, WhatIsPersonalLoan, TypesPersonalLoan, StepsPersonalLoan, PersonalLoanCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <PersonalLoanForm />
            <PersonalLoanScore />
            <WhatIsPersonalLoan />
            <StepsPersonalLoan />
            <TypesPersonalLoan />
            <PersonalLoanCampaigns />
        </React.Fragment>
    )
}

