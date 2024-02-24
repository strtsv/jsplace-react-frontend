import React from "react";
import Swiper from "swiper";

import i1 from "../assets/images/home-1-585x542.jpg";
import i2 from "../assets/images/home-2-585x542.jpg";

class Works extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      speed: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev"
      },
      autoplay: {
        delay: 5000
      }
    });
  }
  render() {
    return (
      <section className="section bg-gradient-1 context-dark section-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-block-1 wow fadeInLeft">
              <div className="section-sm section-sm-3 section-decorative">
                <h5 className="letter-spacing-1">Interactive Portfolio</h5>
                <p className="letter-spacing-2 block-3-custom">
                  This script is built with GSAP and it allows to animate images
                  and text as well as create responsive and interactive
                  galleries for any kind of website.
                </p>
                <div className="button-wrap">
                  <a className="button button-default" href="script-page.html">
                    More Details
                  </a>
                </div>
                <ul className="list-inline list-inline-sm-1">
                  <li>
                    <p className="letter-spacing-2"> Share this script</p>
                  </li>
                  <li>
                    <a
                      className="icon icon-sm link-default mdi mdi-facebook"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm link-default mdi mdi-twitter"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-section">
          <div
            className="swiper-container swiper-slider swiper-slider-1"
            data-next=".custom-swiper-button-next"
            data-prev=".custom-swiper-button-prev"
            data-autoplay={4856}
            data-loop="true"
          >
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                data-slide-bg={i1}
                style={{
                  backgroundImage: "url(" + i1 + ")"
                }}
              />
              <div
                className="swiper-slide"
                data-slide-bg={i2}
                style={{
                  backgroundImage: "url(" + i2 + ")"
                }}
              />
            </div>
            <div className="swiper-pagination" />
            {}
          </div>
          <div className="custom-swiper-button-wrap">
            <div className="custom-swiper-button-next mdi mdi-arrow-right" />
            <div className="custom-swiper-button-prev mdi mdi-arrow-left" />
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
