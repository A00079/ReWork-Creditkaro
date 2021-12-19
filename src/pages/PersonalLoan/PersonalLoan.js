import React from 'react'
import { PersonalLoanForm, StepsToApply, Benefits, FactorsAffecting, PersonalLoanScore, WhatIsPersonalLoan, TypesPersonalLoan, StepsPersonalLoan, PersonalLoanCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <PersonalLoanForm />
            <PersonalLoanScore />
            <WhatIsPersonalLoan />
            <StepsPersonalLoan />
            <FactorsAffecting />
            <TypesPersonalLoan />
            <Benefits />
            <PersonalLoanCampaigns />
            {/* <StepsToApply /> */}
        </React.Fragment>
    )
}

