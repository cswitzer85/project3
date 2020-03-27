import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Secondary from "./pages/Secondary";
import Tertiary from "./pages/ Tertiary";
import Quaternary from "./pages/Quaternary";

class MainContentContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Secondary") {
      return <Secondary />;
    } else if (this.state.currentPage === "Tertiary") {
      return <Tertiary />;
    } else if (this.state.currentPage === "Quaternary") {
      return <Quaternary />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default MainContentContainer;
