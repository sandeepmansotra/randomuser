import React, { Component } from "react";
import { bankBranch } from "../actions";
import { connect } from "react-redux";

class SearchUser extends Component {
  componentDidMount() {
    const url = `https://api.randomuser.me/`;

    console.log("url", url);

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.props.bankBranch(json.results);
      });
  }
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { bankBranch }
)(SearchUser);
