import React from "react";

import i1 from "../../assets/images/brand-1-75x66.png";
import i2 from "../../assets/images/brand-2-97x24.png";
import i3 from "../../assets/images/brand-3-97x70.png";
import i4 from "../../assets/images/brand-4-97x70.png";
import i5 from "../../assets/images/brand-5-75x45.png";
import i6 from "../../assets/images/brand-6-65x56.png";
import i7 from "../../assets/images/brand-7-75x89.png";
import i8 from "../../assets/images/brand-8-73x25.png";
import i9 from "../../assets/images/brand-9-65x25.png";

class Categories extends React.Component {
  render() {
    return (
      <section className="section section-lg section-bottom-custom bg-gray-600 custom-line">
        <div className="container">
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
                <div className="title">Vue</div>
                <img src={i6} alt width={65} height={56} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">Splitting.js</div>
                <img src={i7} alt width={75} height={89} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">Buttons</div>
                <img src={i8} alt width={73} height={25} />
              </a>
              <a className="col-6 col-md-4 box-border" href="#">
                <div className="title">Sliders</div>
                <img src={i9} alt width={65} height={25} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
