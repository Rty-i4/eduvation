import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/header/header";
import Home from "./pages/home";
import Callback from "./components/callback/Callback";
import NotFoundPage from "./pages/NotFoundPage";
import Addresses from "./components/footer/Addresses";
import IeltsPage from "./pages/IeltsPage";
import SatPage from "./pages/SatPage";
import NufypetPage from "./pages/NufypetPage";
import ScrollToTop from "./layout/ScrollToTop";
import EnglishPage from "./pages/EnglishPage";
import axios from "axios";

axios.defaults.baseURL =
  "https://europe-west3-eduvation-b02a9.cloudfunctions.net/api";

function App() {
  // render() {
  return (
    <div>
      <Layout>
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/callback">
              <Callback />
            </Route>
            <Route exact path="/ielts">
              <IeltsPage />
            </Route>
            <Route exact path="/sat">
              <SatPage />
            </Route>
            <Route exact path="/nufypet">
              <NufypetPage />
            </Route>
            <Route exact path="/english">
              <EnglishPage />
            </Route>
            <Route exact>
              <NotFoundPage />
            </Route>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/ielts" component={IeltsPage} />
            <Route exact path="/sat" component={SatPage} />
            <Route exact path="/nufypet" component={NufypetPage} />
            <Route exact path="/english" component={EnglishPage} />
            <Route exact component={NotFoundPage} /> */}
          </Switch>
        </Router>

        <Addresses />
        <Copyright>© eduvation.kz</Copyright>
      </Layout>
    </div>
  );
  // }
}

export default App;

const Layout = styled.div`
  font-family: "Gilroy";
`;

const Copyright = styled.p`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 500;

  color: #e0e0e0;
  margin: 32px;
  bottom: 0;
`;
