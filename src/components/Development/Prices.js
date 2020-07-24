import React from "react";

class Prices extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-700 context-dark">
        <div className="container">
          <h3 className="font-weight-bold custom-title">Pricing</h3>
          <table className="table-custom table-custom-responsive">
            <tbody>
              <tr>
                <td>
                  <div className="icon icon-md icon-gray-300 linearicons-pen3" />
                </td>
                <td>
                  <div className="heading-5 font-family-2 letter-spacing-1">
                    {" "}
                    Web Programming
                  </div>
                </td>
                <td>
                  <div className="heading-6 text-color-1 font-weight-regular">
                    Quis vel eros donec ac,
                    <br className="d-none d-xl-block" /> felis bibendum ut
                    tristique
                  </div>
                </td>
                <td>
                  <div className="price-box-minimal">
                    <div className="text">From</div>
                    <div className="heading-5 price text-secondary">$125</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="icon icon-md icon-gray-300 linearicons-smartphone-embed" />
                </td>
                <td>
                  <div className="heading-5 font-family-2 letter-spacing-1">
                    {" "}
                    UI Development
                  </div>
                </td>
                <td>
                  <div className="heading-6 text-color-1 font-weight-regular">
                    Sodales ut eu sem integer,
                    <br className="d-none d-xl-block" /> vitae justo eget magna
                  </div>
                </td>
                <td>
                  <div className="price-box-minimal">
                    <div className="text">From</div>
                    <div className="heading-5 price text-secondary">$150</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="icon icon-md icon-gray-300 linearicons-pie-chart" />
                </td>
                <td>
                  <div className="heading-5 font-family-2 letter-spacing-1">
                    {" "}
                    QA & Bug Fixing
                  </div>
                </td>
                <td>
                  <div className="heading-6 text-color-1 font-weight-regular">
                    Mauris sit amet massa,
                    <br className="d-none d-xl-block" /> vitae tortor
                    condimentum lacinia
                  </div>
                </td>
                <td>
                  <div className="price-box-minimal">
                    <div className="text">From</div>
                    <div className="heading-5 price text-secondary">$155</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Prices;
