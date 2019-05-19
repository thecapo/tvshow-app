import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FourColGridStyle = styled.div`
  .rmdb-grid h1 {
    font-family: "Abel", sans-serif;
    font-size: 42px;
    color: white;
  }

  .rmdb-grid-content {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  .rmdb-grid-element {
    margin: 0 20px 40px 20px;
    background: #353535;
    max-height: 430px;
    animation: animateGrid 0.5s;
    overflow: hidden;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* For a 4-column grid */
  .rmdb-grid-element:nth-child(4n + 4) {
    margin-right: 0;
  }

  @media screen and (max-width: 720px) {
    .rmdb-grid-content {
      grid-template-columns: auto auto;
    }

    .rmdb-grid-element:nth-child(2n + 2) {
      margin-right: 0;
    }

    .rmdb-grid h1 {
      font-size: 22px;
    }
  }
`;

const FourColGrid = props => {
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <FourColGridStyle key={i}>
          <div className="rmdb-grid-element">
            {element}
          </div>
        </FourColGridStyle>
      );
    });
    return gridElements;
  };

  return (
    <FourColGridStyle>
      <div className="rmdb-grid">
        {props.header && !props.loading ? <h1>{props.header}</h1> : null}
        <div className="rmdb-grid-content">{renderElements()}</div>
      </div>
    </FourColGridStyle>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default FourColGrid;
