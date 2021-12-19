import React from 'react';
import { MainScreen, KeyFeatures, WhatPeopleSay, OurProducts, WhyWe, AboutUs } from './components';
const Home = () => {
  return (
    <React.Fragment>
      <MainScreen />
      <WhyWe />
      {/* <OurProducts /> */}
      <KeyFeatures />
      <AboutUs />
      <WhatPeopleSay />
    </React.Fragment>
  )
};

export default Home;
