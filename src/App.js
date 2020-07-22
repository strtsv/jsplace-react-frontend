import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import Cats from "./pages/Cats";
import Development from "./pages/Development";
// import Team from "./pages/Team";
import Contact from "./pages/Contact";
// import News from "./pages/News";
// import NewsPost from "./pages/NewsPost";
// import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/categories.html" component={Cats} />
      <Route exact path="/contacts.html" component={Contact} />
      {/* <Route exact path="/our-team.html" component={Team} /> */}
      <Route exact path="/development.html" component={Development} />
      {/* <Route exact path="/testimonials.html" component={Testimonials} /> */}
      {/* <Route exact path="/news-post.html" component={NewsPost} /> */}
      {/* <Route exact path="/news.html" component={News} /> */}
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
