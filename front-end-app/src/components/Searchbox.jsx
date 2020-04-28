import React, { Component } from "react";
import "./search-style.css";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";

class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Search Product",
      item: null,
      data: [],
    };
  }
  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      console.log("value", event.target.value);
      this.setState({ item: event.target.value });
      this.setState({ data: [] });
      fetch("/api/resource-tracker/?item=" + event.target.value)
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
    }
  }
  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
      <div>
        <div className={fieldClassName}>
          {active && value && predicted && predicted.includes(value) && (
            <p className="predicted">{predicted}</p>
          )}
          <input
            id={1}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={1} className={error && "error"}>
            {error || label}
          </label>
        </div>
        <div style={{ color: "white" }}>
          {this.state.item}
          <br></br>
          {JSON.stringify(this.state.data)}
        </div>
      </div>
    );
  }
}

export default Searchbox;
