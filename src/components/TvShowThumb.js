import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const TvShowThumbStyle = styled.div`
  .rmdb-tvthumb img {
    width: 500px;
    /* height: 420px; */
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transition: all 0.3s;
    box-sizing: border-box;
  }

  .clickable {
    cursor: pointer;
  }

  .clickable:hover {
    opacity: 0.8;
  }
`;

const TvShowThumb = props => {
  return (
    <TvShowThumbStyle>
      <div className="rmdb-tvthumb">
        {props.clickable ? (
          <Link
            to={{
              pathname: `/${props.tvshowId}`,
              tvshowName: `${props.tvshowName}`
            }}
          >
            <img src={props.image} alt="tvthumb" />
          </Link>
        ) : (
          <img src={props.image} alt="tvthumb" />
        )}
      </div>
    </TvShowThumbStyle>
  );
};

TvShowThumb.propTypes = {
  image: PropTypes.string,
  tvshowId: PropTypes.number,
  tvshowName: PropTypes.string
};

export default TvShowThumb;
