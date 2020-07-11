import React from "react";

class Featured extends React.Component {
  render() {
    return (
      <section className="section section-xs section-xs-3 bg-gray-600">
        <div className="container">
          <div className="row row-30 align-items-center">
            <div className="col-sm-6 text-center text-sm-left wow fadeIn">
              <h3 className="custom-title-main">Featured Script</h3>
            </div>
            <div className="col-sm-6 text-center text-sm-right wow fadeIn">
              <a className="button button-outline" href="scripts.html">
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
