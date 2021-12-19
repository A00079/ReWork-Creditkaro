import React from 'react'
import { AboutHousingFinance, HomeLoanForm, Eligibility, HomeLoanScore, WhatIsHomeLoan, TypesHomeLoan, StepsHomeLoan, HomeLoanCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <HomeLoanForm />
            <AboutHousingFinance />
            <Eligibility />
            <HomeLoanScore />
            {/* <WhatIsHomeLoan /> */}
            <StepsHomeLoan />
            <TypesHomeLoan />
            <HomeLoanCampaigns />
        </React.Fragment>
    )
}

