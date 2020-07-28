import React, { Component } from "react";
import "./Layout.scss";
import SearchComp from "../SearchComp/SearchComp";
import Card from "../../shared-components/Card/Card";
import FavouriteMovies from "../FavouriteMovies/FavouriteMovies";
import Toolbar from "../../components/Toolbar/Toolbar";

class Layout extends Component {
  
  render() {
    return (
      <div className="layout-container">
        <Toolbar />
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
