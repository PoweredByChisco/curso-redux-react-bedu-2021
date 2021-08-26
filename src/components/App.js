import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Users from "./users";
import Layout from "./Layout";
import Publications from "./pub";
import Tasks from "./tasks"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <>
          <div className="margin">
            <Route exact path="/" component={Users} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/pub/:key" component={Publications} />
          </div>
        </>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
