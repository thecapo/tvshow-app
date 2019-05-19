import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import TvShowThumb from "./TvShowThumb";

const TvShowInfoStyle = styled.div`
  .rmdb-tvshowinfo {
    background-size: cover !important;
    background-position: center !important;
    width: 100%;
    height: 600px;
    padding: 40px 20px;
    box-sizing: border-box;
    animation: animateTvshowinfo 1s;
  }

  @keyframes animateTvshowinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rmdb-tvshowinfo-content {
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    position: relative;
  }

  .rmdb-tvshowinfo-thumb {
    width: 350px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0px;
  }

  .rmdb-tvshowinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    width: auto;
    padding: 40px;
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    left: 360px;
  }

  .rmdb-tvshowinfo-text h1 {
    font-family: "Abel", sans-serif;
    font-size: 48px;
    margin: 0;
  }

  .rmdb-tvshowinfo-text h3 {
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
  }

  .rmdb-tvshowinfo-text p {
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
  }

  .rmdb-rating {
    width: 250px;
    height: 20px;
    margin-top: 20px;
    position: relative;
  }

  .rmdb-score {
    position: absolute;
    margin: 0;
    right: 0px;
    top: -3px;
  }

  .rmdb-crew {
    margin: 0;
  }

  .fa-film {
    position: absolute;
    bottom: 40px;
    right: 40px;
    color: #fff;
  }

  meter::-webkit-meter-bar {
    background: #fff;
    width: 200px;
  }
  meter::-webkit-meter-optimum-value {
    background: linear-gradient(to bottom, #16d47b);
  }
  meter::-webkit-meter-suboptimum-value {
    background: linear-gradient(to bottom, #fbb450);
  }
  meter::-webkit-meter-even-less-good-value {
    background: linear-gradient(to bottom, #ee5f5b);
  }
`;

const TvShowInfo = props => {
  console.log('props', props)
  return (
    <TvShowInfoStyle>
      <div
        className="rmdb-tvshowinfo"
        style={{
          background: props.tvshow.backdrop_path
            ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                props.tvshow.backdrop_path
              }')`
            : "#000"
        }}
      >
        <div className="rmdb-tvshowinfo-content">
          <div className="rmdb-tvshowinfo-thumb">
            <TvShowThumb
              image={
                props.tvshow.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                      props.tvshow.poster_path
                    }`
                  : "./images/no_image.jpg"
              }
              clickable={false}
            />
          </div>
          <div className="rmdb-tvshowinfo-text">
            <h1>{props.tvshow.title}</h1>
            <h3>PLOT</h3>
            <p>{props.tvshow.overview}</p>
            <h3>IMDB RATING</h3>
            <div className="rmdb-rating">
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.tvshow.vote_average * 10}
              />
              <p className="rmdb-score">{props.tvshow.vote_average}</p>
            </div>
            {props.crews.length > 1 ? (
              <h3>Executive Producers</h3>
            ) : (
              <h3>Executive Producer</h3>
            )}
            {props.crews.map((element, i) => {
              return (
                <p key={i} className="rmdb-crew">
                  {element.name}
                </p>
              );
            })}
          </div>
          <FontAwesome className="fa-film" name="film" size="5x" />
        </div>
      </div>
    </TvShowInfoStyle>
  );
};

export default TvShowInfo;
