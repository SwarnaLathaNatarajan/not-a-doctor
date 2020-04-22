import React, { Component } from "react";

class Module1 extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("/covid-map-data")
      .then((result) => {
        console.log(result);
        return result.json();
      })
      .then((users) => {
        console.log(users);
        this.setState({ users });
      });
  }
  render() {
    return (
      <div className="Module1">
        <h1> Module 1 - Map</h1>
        {this.state.users.map((user) => (
          <div>State:{user.Admin2}</div>
        ))}
      </div>
    );
  }
}
export default Module1;
