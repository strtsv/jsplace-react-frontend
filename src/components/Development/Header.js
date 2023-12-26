import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-wide"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src="images/logo-default-174x48.png"
                        alt
                        width={174}
                        height={48}
                        srcSet="images/logo-default-348x96.png 2x"
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-default-174x48.png"
                        alt
                        width={174}
                        height={48}
                        srcSet="images/logo-default-348x96.png 2x"
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-nav-wrap">
                  {}
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Scripts
                      </a>
                      {}
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="scripts.html">
                            Scripts
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="scripts-2.html">
                            Scripts 2
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="script-page.html"
                          >
                            Script page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="categories.html">
                        Categories
                      </a>
                    </li>
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="development.html">
                        Development
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Pages
                      </a>
                      {}
                      <ul className="rd-menu rd-navbar-megamenu">
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title">Elements</div>
                          <div className="rd-megamenu-block">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                            </ul>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="counters.html"
                                >
                                  Counters
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="icon-lists.html"
                                >
                                  Icon lists
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title">Pages</div>
                          <div className="rd-megamenu-block">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team.html"
                                >
                                  Team
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="404.html"
                                >
                                  404
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="coming-soon.html"
                                >
                                  Coming soon
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                            </ul>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="blog.html"
                                >
                                  Blog
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="blog-post.html"
                                >
                                  Blog post
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="about-us.html"
                                >
                                  About us
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="contacts.html">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
