import React from "react";

class GetInTouch extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-700">
        <div className="container">
          <h3 className="font-weight-bold">Get in touch with us</h3>
          <p className="big text-color-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
            <br className="d-none d-xl-block" /> magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </p>
          {}
          <form
            className="rd-form rd-mailform form-boxed form-boxed-2"
            data-form-output="form-output-global"
            data-form-type="contact"
            method="post"
            action="bat/rd-mailform.php"
          >
            <div className="row row-50">
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-account-outline" />
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline" />
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="contact-email">
                    E-mail
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-phone" />
                  <input
                    className="form-input"
                    id="contact-phone"
                    type="text"
                    name="phone"
                    data-constraints="@Numeric"
                  />
                  <label className="form-label" htmlFor="contact-phone">
                    Phone
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-message-outline" />
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button className="button button-default" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default GetInTouch;
