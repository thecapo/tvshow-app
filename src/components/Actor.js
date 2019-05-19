import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../config";

const ActorStyle = styled.div`
  .rmdb-actor {
    box-sizing: border-box;
  }

  .rmdb-actor img {
    width: 125px;
    height: 185px;;
    float: left;
    box-sizing: border-box;
  }

  .rmdb-actor-name {
    font-family: "Abel", sans-serif;
    font-size: 22px;
    color: #fff;
    float: left;
    margin: 10px 20px;
    width: 40%;
    box-sizing: border-box;
  }

  .rmdb-actor-character {
    font-family: "Abel", sans-serif;
    font-size: 18px;
    color: #fff;
    float: left;
    margin: 0 20px 10px 20px;
    width: 40%;
    box-sizing: border-box;
  }
`;

const Actor = props => {
  const POSTER_SIZE = "w154";

  return (
    <ActorStyle>
      <div className="rmdb-actor">
        <img
          src={
            props.actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
              : "./images/no_image.jpg"
          }
          alt="actorthumb"
        />
        <span className="rmdb-actor-name">{props.actor.name}</span>
        <span className="rmdb-actor-character">{props.actor.character}</span>
      </div>
    </ActorStyle>
  );
};

export default Actor;
