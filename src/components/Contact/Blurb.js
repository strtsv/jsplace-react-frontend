import React from "react";

class Blurb extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-700">
        <div className="container">
          <div className="row row-40">
            <div className="col-sm-6 col-md-4">
              <div className="box-lined">
                <div className="box-lined-body">
                  <h6 className="box-lined-title">Email & telephone</h6>
                  <ul className="box-lined-list">
                    <li>
                      <a className="big link-default-2" href="mailto:#">
                        info@demolionk.org
                      </a>
                    </li>
                    <li>
                      <a className="big link-default-2" href="tel:#">
                        1-300-123-1234
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="box-lined">
                <div className="box-lined-body">
                  <h6 className="box-lined-title">Address</h6>
                  <ul className="box-lined-list">
                    <li className="big text-color-1">
                      1418 Riverwood Drive, Suite 3845 Cottonwood, CA 96022
                      United States
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box-lined">
                <div className="box-lined-body">
                  <h6 className="box-lined-title">Socials</h6>
                  <ul className="list-inline list-inline-sm">
                    <li>
                      <a
                        className="icon icon-sm icon-bordered link-default mdi mdi-facebook"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm icon-bordered link-default mdi mdi-instagram"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm icon-bordered link-default mdi mdi-behance"
                        href="#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-sm icon-bordered link-default mdi mdi-twitter"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blurb;
