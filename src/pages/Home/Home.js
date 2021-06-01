import React from 'react';
import { MainScreen, KeyFeatures, OurProducts, WhyWe, AboutUs } from './components';
const Home = () => {
  return (
    <React.Fragment>
      <MainScreen />
      <KeyFeatures />
      <OurProducts />
      <WhyWe />
      <AboutUs />
    </React.Fragment>
  )
};

export default Home;
