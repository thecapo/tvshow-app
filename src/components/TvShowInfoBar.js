import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import { calcTime, calcPopularity } from "../helpers";

const TvShowInfoBarStyle = styled.div`
  .rmdb-tvinfobar {
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
    font-size: 22px;
  }

  .rmdb-tvinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
  }

  .rmdb-tvinfobar-content-col {
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
  }

  .rmdb-tvinfobar-info {
    padding: 5px 0 0 10px;
    float: left;
  }

  .fa-popularity,
  .fa-calendar {
    float: left;
    margin-top: -4px;
  }

  .fa-time {
    float: left;
    margin-top: -3px;
  } 
`;

const TvShowInfoBar = props => {
  return (
    <TvShowInfoBarStyle>
      <div className="rmdb-tvinfobar">
        <div className="rmdb-tvinfobar-content">
          <div className="rmdb-tvinfobar-content-col">
            <FontAwesome className="fa-popularity" name="angellist" size="2x" />
            <span className="rmdb-tvinfobar-info">
              Popularity: {calcPopularity(props.popularity)}
            </span>
          </div>
          <div className="rmdb-tvinfobar-content-col">
            <FontAwesome className="fa-time" name="clock-o" size="2x" />
            <span className="rmdb-tvinfobar-info">
              Run Time: {calcTime(props.runtime)}
            </span>
          </div>
          <div className="rmdb-tvinfobar-content-col">
            <FontAwesome className="fa-calendar" name="calendar" size="2x" />
            <span className="rmdb-tvinfobar-info">
              First Air Date: {props.first_air_date}
            </span>
          </div>
        </div>
      </div>
    </TvShowInfoBarStyle>
  );
};

export default TvShowInfoBar;
