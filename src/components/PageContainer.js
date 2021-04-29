import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetail from "./MovieDetailPage";
import { Fragment } from "react";

function PageContainer() {
  return (
    <Fragment>
        <Router>
          <div className="pageContainer">
            <Switch>
              <Route path="/:name" children={<MovieDetail />} />
              <Route path="/" exact children={<HomePage />} />
            </Switch>
          </div>
        </Router>
    </Fragment>
  );
}

export default PageContainer;
