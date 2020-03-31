import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Secondary from "./pages/Secondary";
import Tertiary from "./pages/ Tertiary";
import Quaternary from "./pages/Quaternary";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";

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
    } else if (this.state.currentPage === "SignupForm") {
      return <SignupForm />
    } else if (this.state.currentPage === "LoginForm") {
        return <LoginForm />
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
