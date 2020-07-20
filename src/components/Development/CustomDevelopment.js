import React from "react";

import i from "../../assets/images/breadcrumbs-bg-2.jpg";

class CustomDevelopment extends React.Component {
  render() {
    return (
      <section
        className="breadcrumbs-custom bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="breadcrumbs-custom-title">custom Development</div>
          <div className="breadcrumbs-custom-subtitle">
            We can develop any kind of web solution for you.
          </div>
        </div>
      </section>
    );
  }
}

export default CustomDevelopment;
