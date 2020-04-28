import React, { useState, useEffect, Component } from "react";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";

class CountryPicker extends React.Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/api/covid-map-data/last-updated")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    {
      var country_names = this.state.data.map((val, i) => {
        return val.Country_Region;
      });

      var distinct_countrynames = Array.from(new Set(country_names));

      // var length = country.length;
      return (
        <FormControl className={styles.formControl}>
          <NativeSelect>
            <option value="global">Global</option>
            {distinct_countrynames.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      );
    }
  }
}

export default CountryPicker;
