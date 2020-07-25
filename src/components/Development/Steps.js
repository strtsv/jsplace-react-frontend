import React from "react";

class Steps extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-500">
        <div className="container">
          <div className="row row-40 justify-content-between">
            <div className="col-lg-3">
              <h5>Step #1</h5>
              <p>
                Egestas pretium aenean pharetra magna ac. Convallis a cras
                semper auctor neque vitae
              </p>
            </div>
            <div className="col-lg-3">
              <h5>Step #2</h5>
              <p>
                Varius morbi enim nunc faucibus a pellentesque sit amet in metus
                vulputate eu scelerisque
              </p>
            </div>
            <div className="col-lg-3">
              <h5>Step #3</h5>
              <p>
                Aliquet eget sit amet tellus cras adipiscing. Amet consectetur
                adipiscing elit
              </p>
            </div>
            <div className="col-lg-3">
              <h5>Step #4</h5>
              <p>
                Integer eget aliquet nibh praesent tristique. Euismod lacinia at
                quis risus sed vulputate
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Steps;
