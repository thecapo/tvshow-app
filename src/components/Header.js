import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const HeaderStyle = styled.div`
  width: 100%;
  height: auto;
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 1280px;
  min-height: 120px;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;

  .rmdb-logo {
    width: 300px;
    margin-top: 20px;
    float: left;
    color: white;
  }

  .rmdb-tmdb-logo-text {
    width: 122px;
    font-size: 65px;
  }

  .rmdb-tmdb-logo {
    width: 122px;
    margin-top: 25px;
    float: right;
  }

  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;

    .rmdb-tmdb-logo-text {
      display: inline-block;
      width: 80px;
      margin-top: 0px;
    }

    .rmdb-tmdb-logo {
      display: inline-block;
      width: 80px;
      margin-top: 0px;
    }

    .rmdb-logo {
      margin-top: 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <div className="rmdb-logo">
          <FontAwesome name="tv" size="4x" />
          <span className="rmdb-tmdb-logo-text">TV-APP</span>
        </div>
        <img
          className="rmdb-tmdb-logo"
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
        />
      </Link>
    </HeaderStyle>
  );
};

export default Header;