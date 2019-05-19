import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const SearchBarStyle = styled.div`
  .rmdb-searchbar {
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
  }

  .rmdb-searchbar-content {
    max-width: 1280px;
    width: 100%;
    height: 55px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;
  }

  .rmdb-fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
  }

  .rmdb-searchbar-input {
    font-family: "Abel", sans-serif;
    font-size: 38px;
    position: absolute;
    left: 70px;
    top: 7px;
    border: 0;
    background: transparent;
    height: 40px;
    color: #fff;
  }

  .rmdb-searchbar-input:focus {
    outline: none;
  }

  @media screen and (max-width: 720px) {
    .rmdb-searchbar-input {
      font-size: 28px;
      color: #fff;
    }
  }
`;

class SearchBar extends Component {
  state = {
    value: ""
  };

  timeout = null;

  doSearch = event => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <SearchBarStyle>
        <div className="rmdb-searchbar">
          <div className="rmdb-searchbar-content">
            <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
            <input
              type="text"
              className="rmdb-searchbar-input"
              placeholder="Search"
              onChange={this.doSearch}
              value={this.state.value}
            />
          </div>
        </div>
      </SearchBarStyle>
    );
  }
}

export default SearchBar;
