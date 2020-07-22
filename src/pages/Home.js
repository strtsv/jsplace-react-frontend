import React from "react";

import Header from "../components/Header";
import Preview from "../components/Home/Preview";
import Categories from "../components/Home/Categories";
import NewScripts from "../components/Home/NewScripts";
import Featured from "../components/Featured";
import Works from "../components/Works";
import Kinds from "../components/Home/Kinds";
import PageFooter from "../components/PageFooter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Preview />
      <Categories />
      <NewScripts />
      <Featured />
      <Works />
      <Kinds />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default Home;
