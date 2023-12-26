import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark text-center">
        <div className="container">
          <div className="row row-15 justify-content-lg-between">
            <div className="col-lg-4 col-xl-3 text-lg-left">
              <p className="rights">
                <span>©  </span>
                <span className="copyright-year" />
                <span> </span>
                <span>JSPlace</span>
                <span>. </span>
                <span>All Rights reserved</span>
              </p>
            </div>
            <div className="col-lg-5 col-xl-6">
              <ul className="list-inline list-inline-lg list-inline-custom text-uppercase">
                <li className="font-weight-bold">
                  <a href="about-us.html">About us</a>
                </li>
                <li className="font-weight-bold">
                  <a href="scripts.html">Scripts</a>
                </li>
                <li className="font-weight-bold">
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
