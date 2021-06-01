import React from 'react'
import { CreditForm, CreditScore, WhatIsCreditCard, TypesCreditCards } from './Components';
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <CreditForm />
            <CreditScore />
            <WhatIsCreditCard />
            <TypesCreditCards />
        </React.Fragment>
    )
}

