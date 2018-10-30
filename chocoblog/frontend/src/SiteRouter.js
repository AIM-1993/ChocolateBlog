import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SiteRouter extends React.Component {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Route path="/:id" component={Child} />

        {/*
           It's possible to use regular expressions to control what param values should be matched.
              * "/order/asc"  - matched
              * "/order/desc" - matched
              * "/order/foo"  - not matched
        */}
        <Route
          path="/order/:direction(asc|desc)"
          component={ComponentWithRegex}
        />
      </div>
    </Router>
  );
}
export default SiteRouter
