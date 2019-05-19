import React from "react";
import styled from "styled-components";

const LoadMoreBtnStyle = styled.div`
  .rmdb-loadmorebtn {
    background: #16d47b;
    width: 100%;
    min-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .rmdb-loadmorebtn p {
    font-family: "Abel", sans-serif;
    font-size: 42px;
    padding: 20px;
  }

  .rmdb-loadmorebtn:hover {
    opacity: 0.8;
  }
`;

const LoadMoreBtn = props => {
  return (
    <LoadMoreBtnStyle>
      <div className="rmdb-loadmorebtn" onClick={props.onClick}>
        <p>{props.text}</p>
      </div>
    </LoadMoreBtnStyle>
  );
};

export default LoadMoreBtn;
