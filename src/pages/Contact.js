import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Contact/Breadcrumbs";
import Blurb from "../components/Contact/Blurb";
import GetInTouch from "../components/Contact/GetInTouch";
import PageFooter from "../components/PageFooter";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Blurb />
      <GetInTouch />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default Contact;
