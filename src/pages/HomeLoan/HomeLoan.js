import React from 'react'
import { HomeLoanForm, HomeLoanScore, WhatIsHomeLoan, TypesHomeLoan, StepsHomeLoan, HomeLoanCampaigns } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <HomeLoanForm />
            <HomeLoanScore />
            <WhatIsHomeLoan />
            <StepsHomeLoan />
            <TypesHomeLoan />
            <HomeLoanCampaigns />
        </React.Fragment>
    )
}

