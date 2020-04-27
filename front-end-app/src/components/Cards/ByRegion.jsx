import ConfirmedCard from "./ConfirmedCard";
import RecoveredCard from "./RecoveredCard";
import DeathsCard from "./DeathsCard";
import React, { Component } from "react";

class ByRegion extends React.Component {
  render() {
    return (
      <div class="d-flex flex-row" style={{ backgroundColor: "#121212" }}>
        <div class="p-2">
          <ConfirmedCard />
        </div>
        <div class="p-2">
          <RecoveredCard />
        </div>
        <div class="p-2">
          <DeathsCard />
        </div>
      </div>
    );
  }
}

export default ByRegion;
