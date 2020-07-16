import React from "react";

import i1 from "../../assets/images/post-small-1-369x222.jpg";
import i2 from "../../assets/images/post-small-2-369x222.jpg";
import i3 from "../../assets/images/post-small-3-369x222.jpg";
import i4 from "../../assets/images/post-small-4-369x222.jpg";
import i5 from "../../assets/images/post-small-5-369x222.jpg";
import i6 from "../../assets/images/post-small-6-369x222.jpg";

class NewScripts extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-700">
        <div className="container">
          <h3 className="font-weight-bold text-white text-center">
            new scripts
          </h3>
          <div className="row row-60">
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">React</div>
                  <a href="script-page.html">
                    <img src={i1} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    Interactive JS: Animated Abstract Visual
                  </a>
                </h5>
                <div className="time">john doe</div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">anime.js</div>
                  <a href="script-page.html">
                    <img src={i2} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    Animated Shape Transition: Triangles and Cubes
                  </a>
                </h5>
                <div className="time">Chris wilson</div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">Design</div>
                  <a href="script-page.html">
                    <img src={i3} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    Sequential Element Animation and Transition
                  </a>
                </h5>
                <div className="time">peter Adams</div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">sass</div>
                  <a href="script-page.html">
                    <img src={i4} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    Smooth Abstract Background CSS animation with CSS3
                  </a>
                </h5>
                <div className="time">Kate smith</div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">react</div>
                  <a href="script-page.html">
                    <img src={i5} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    3D Animation with Complex Particles
                  </a>
                </h5>
                <div className="time">Debrah McMillan</div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="post-classic-small">
                <div className="media-wrap">
                  <div className="tag">GSAP</div>
                  <a href="script-page.html">
                    <img src={i6} alt width={369} height={222} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="script-page.html">
                    Abstract Background Animation in GSAP
                  </a>
                </h5>
                <div className="time">Ann Taylor</div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeIn"
              data-wow-delay="0.2s"
            >
              <a className="button button-outline" href="scripts.html">
                view all scripts
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewScripts;
