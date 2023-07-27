
import React, { useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import AuthPage from "./components/Login";

function App() {
  const [page, setPage] = useState("/")
  
  return (
      <div>
          <Navbar onChangePage={setPage} />
          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route>
                  <LoginPage />
              </Route>
              <Route>
                  <AuthPage />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
