import React from "react";

class PageFooter extends React.Component {
  render() {
    return (
      <div className="pre-footer-classic context-dark">
        <div className="container">
          <div className="row row-60 justify-content-lg-between text-center text-sm-left">
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h6 className="font-weight-medium text-uppercase">About us</h6>
              <p>
                JSPlace is a universal scripts directory with a collection
                suitable for various purposes of web development.
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <h6 className="font-weight-medium text-uppercase">Contacts</h6>
              <dl className="list-terms-custom">
                <dt>
                  <span className="icon mdi mdi-phone" />
                </dt>
                <dd>
                  <a className="link-default" href="tel:#">
                    1-300-123-1234
                  </a>
                </dd>
              </dl>
              <dl className="list-terms-custom">
                <dt>
                  <span className="icon mdi mdi-email" />
                </dt>
                <dd>
                  <a className="link-default" href="mailto:#">
                    Info@demolionk.org
                  </a>
                </dd>
              </dl>
              <ul className="list-inline list-inline-sm">
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-facebook"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-instagram"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-behance"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-twitter"
                    href="#"
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="font-weight-medium text-uppercase">Newsletter</h6>
              <form
                className="rd-form rd-mailform rd-mailform-custom"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline" />
                  <input
                    className="form-input"
                    id="footer-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="footer-email">
                    E-mail
                  </label>
                </div>
                <div className="button-wrap text-center text-sm-left">
                  <button className="button button-default" type="submit">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFooter;
