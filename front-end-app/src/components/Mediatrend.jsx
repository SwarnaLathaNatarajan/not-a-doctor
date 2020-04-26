import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Mediatrendchart from "./Mediatrendchart";

class Mediatrend extends Component {
  state = {
    startDate: "",
    endDate: "",
  };

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    return (
      <div id="datepickers">
        <DatePicker
          selected={Date.parse(this.state.startDate)}
          onChange={this.handleStartDateChange}
          className="datepicker"
          maxDate={Date.parse(this.state.endDate)}
          placeholderText="Start Date"
        />
        <DatePicker
          selected={Date.parse(this.state.endDate)}
          onChange={this.handleEndDateChange}
          className="datepicker"
          minDate={Date.parse(this.state.startDate)}
          maxDate={new Date()}
          placeholderText="End Date"
        />
        <br></br>
        <Mediatrendchart startdate={this.state.startDate} />
      </div>
    );
  }
}

export default Mediatrend;
