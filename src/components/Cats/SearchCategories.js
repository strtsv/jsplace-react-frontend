import React from "react";

import i from "../../assets/images/breadcrumbs-bg-2.jpg";

class SearchCategories extends React.Component {
  render() {
    return (
      <section
        className="breadcrumbs-custom bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="breadcrumbs-custom-title">Categories</div>
          <div className="row justify-content-center offset-custom">
            <div className="col-12 col-lg-7">
              <div className="breadcrumbs-custom-search">
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
                      Search category...
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
      </section>
    );
  }
}

export default SearchCategories;
