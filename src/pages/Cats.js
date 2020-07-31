import React from "react";

import Header from "../components/Header";
import SearchCategories from "../components/Cats/SearchCategories";
import Categories from "../components/Cats/Categories";
import PageFooter from "../components/PageFooter";
import Footer from "../components/Footer";

const Cats = () => {
  return (
    <div className="page animated">
      <Header />
      <SearchCategories />
      <Categories />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default Cats;
