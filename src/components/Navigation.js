import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationStyle = styled.div`
  .rmdb-navigation {
    width: 100%;
    height: 50px;
    background: #353535;
    color: #fff;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    margin: 0;
    padding-top: 10px;
  }

  .rmdb-navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .rmdb-navigation-content p {
    font-family: "Abel", sans-serif;
    font-size: 22px;
    float: left;
    color: #fff;
    padding-right: 10px;
    text-decoration: none;
    margin: 0;
  }
`;

const Navigation = props => {
  return (
    <NavigationStyle>
      <div className="rmdb-navigation">
        <div className="rmdb-navigation-content">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <p>{props.tvshow}</p>
        </div>
      </div>
    </NavigationStyle>
  );
};

export default Navigation;
