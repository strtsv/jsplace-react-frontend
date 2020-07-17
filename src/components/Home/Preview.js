import React from "react";

import i from "../../assets/images/jumbotron-1-1920x954.jpg";

class Preview extends React.Component {
  render() {
    return (
      <section
        className="section context-dark bg-image bg-mask bg-mask-2 section-fullheight section-90vh"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="section-fullheight-inner section-md main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 text-center text-md-left">
                <div className="jumbotron-custom wow fadeInLeft">
                  <div className="title">Scripts</div>
                  <h5 className="subtitle">for Programmers and developers</h5>
                  <p className="text">
                    JSPlace is one of the biggest script directories on the
                    Internet offering a variety of custom-designed scripts for
                    everyone.
                  </p>
                  {}
                  <form
                    className="rd-form rd-search rd-form-inline"
                    action="search-results.html"
                    method="GET"
                  >
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="rd-search-form-input"
                      >
                        Search script...
                      </label>
                      <input
                        className="form-input"
                        id="rd-search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-button">
                      <button className="button button-secondary" type="submit">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
