import React from "react";

import i from "../../assets/images/breadcrumbs-bg-1.jpg";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section
        className="breadcrumbs-custom bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="breadcrumbs-custom-title">Contact Us</div>
          <div className="breadcrumbs-custom-subtitle">Write us a message</div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
