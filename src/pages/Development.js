import React from "react";

import Header from "../components/Header";
import CustomDevelopment from "../components/Development/CustomDevelopment";
import Webdesign from "../components/Development/Webdesign";
import Steps from "../components/Development/Steps";
import Prices from "../components/Development/Prices";
import Featured from "../components/Featured";
import Works from "../components/Works";
import PageFooter from "../components/PageFooter";
import Footer from "../components/Footer";

const Development = () => {
  return (
    <div className="page animated">
      <Header />
      <CustomDevelopment />
      <Webdesign />
      <Steps />
      <Prices />
      <Featured />
      <Works />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default Development;
