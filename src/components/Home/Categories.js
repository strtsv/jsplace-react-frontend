import React from "react";

import i1 from "../../assets/images/brand-1-75x66.png";
import i2 from "../../assets/images/brand-2-97x24.png";
import i3 from "../../assets/images/brand-3-97x70.png";
import i4 from "../../assets/images/brand-4-97x70.png";
import i5 from "../../assets/images/brand-5-75x45.png";

class Categories extends React.Component {
  render() {
    return (
      <section className="section section-lg section-bottom-custom bg-gray-600 section-lined">
        <div className="container container-lined">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4" />
            <div className="col-md-4" />
          </div>
        </div>
        <div className="container">
          <div className="row row-30 align-items-center">
            <div className="col-sm-12 col-lg-4">
              <h3 className="font-weight-bold">Categories</h3>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="block-1-custom">
                Since the launch of our website, we have gathered over 500
                animations and various scripts in over nine categories.
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="block-2-custom">
                <div className="counter-minimal">
                  <div className="counter-left">
                    <div className="counter">9</div>
                  </div>
                  <div className="counter-right">
                    <div className="postfix">+</div>
                    <div className="title">Different categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border-wrap-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="row">
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">react</div>
                <img src={i1} alt width={75} height={66} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">anime.js</div>
                <img src={i2} alt width={97} height={24} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">sass</div>
                <img src={i3} alt width={97} height={70} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">Gsap</div>
                <img src={i4} alt width={97} height={70} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">Tailwind css</div>
                <img src={i5} alt width={75} height={45} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <ul className="box-border-custom">
                  <li className="dot-custom" />
                  <li className="dot-custom" />
                  <li className="dot-custom" />
                </ul>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
