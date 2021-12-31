import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import CreditCard from "./pages/CreditCard";
import PersonalLoan from "./pages/PersonalLoan";
import HomeLoan from "./pages/HomeLoan";
import DematAccount from "./pages/DematAccount";
import SavingAccount from "./pages/SavingAccount";
import SpecialOffersForYou from "./pages/SpecialOffersForYou";
import ContactUs from "./pages/ContactUs";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Home}
        />
        <WithLayoutRoute
          exact
          path="/credit-card"
          layout={PublicLayout}
          component={CreditCard}
        />
        <WithLayoutRoute
          exact
          path="/personal-loan"
          layout={PublicLayout}
          component={PersonalLoan}
        />
        <WithLayoutRoute
          exact
          path="/home-loan"
          layout={PublicLayout}
          component={HomeLoan}
        />
        <WithLayoutRoute
          exact
          path="/demat-account"
          layout={PublicLayout}
          component={DematAccount}
        />
        <WithLayoutRoute
          exact
          path="/saving-account"
          layout={PublicLayout}
          component={SavingAccount}
        />
        <WithLayoutRoute
          exact
          path="/special-offers"
          layout={PublicLayout}
          component={SpecialOffersForYou}
        />
        <WithLayoutRoute
          exact
          path="/contact-us"
          layout={PublicLayout}
          component={ContactUs}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
