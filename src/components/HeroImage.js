import React from "react";
import styled from "styled-components";

const HeroImageStyle = styled.div`
  .rmdb-heroimage {
    background-size: 100%, cover !important;
    background-position: center, center !important;
    width: 100%;
    height: 600px;
    position: relative;
    animation: animateHeroimage 1s;
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rmdb-heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .rmdb-heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;
  }

  .rmdb-heroimage-text h1 {
    font-family: "Abel", sans-serif;
    font-size: 48px;
    color: #fff;
  }

  .rmdb-heroimage-text p {
    font-family: "Abel", sans-serif;
    font-size: 22px;
    line-height: 26px;
    color: #fff;
  }

  @media screen and (max-width: 720px) {
    .rmdb-heroimage-text {
      max-width: 100%;
    }

    .rmdb-heroimage-text h1 {
      font-size: 38px;
      color: #fff;
    }

    .rmdb-heroimage-text p {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
    }
  }
`;

const HeroImage = props => {
  return (
    <HeroImageStyle>
      <div
        className="rmdb-heroimage"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%),
      url('${props.image}'), #1c1c1c`
        }}
      >
        <div className="rmdb-heroimage-content">
          <div className="rmdb-heroimage-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </HeroImageStyle>
  );
};

export default HeroImage;
