import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.scss";

import reducer from "../src/Store/Reducer";
import excel from "../src/Assets/excel.svg";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import SearchComp from "./containers/SearchComp/SearchComp";
import FavouriteMovies from "./containers/FavouriteMovies/FavouriteMovies";
import axios from "axios";
import MovieDetailCompConnect from "./shared-components/MovieDetailComp/MovieDetailComp";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/favourites" component={FavouriteMovies} />
          <Route path="/movie-details" component={MovieDetailCompConnect} />

          <Route path="/" exact component={SearchComp} />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
