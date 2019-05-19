import React, { Component } from "react";
import styled from "styled-components";
import { API_URL, API_KEY } from "../config";
import Navigation from "./Navigation";
import TvShowInfo from "./TvShowInfo";
import TvShowInfoBar from "./TvShowInfoBar";
import FourColGrid from "./FourColGrid";
import Actor from "./Actor";
import Spinner from "./Spinner";

const TvShowStyle = styled.div`
  .rmdb-tvshow {
    margin-bottom: 100px;
  }

  .rmdb-tvshow-grid {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

class TvShow extends Component {
  state = {
    tvshow: null,
    actors: null,
    networks: [],
    crews: [],
    loading: false
  };

  componentDidMount() {
    if (localStorage.getItem(`${this.props.match.params.tvshowId}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${this.props.match.params.tvshowId}`)
      );
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}tv/${
        this.props.match.params.tvshowId
      }?api_key=${API_KEY}&language=en-US`; 
      this.fetchItems(endpoint);
    }
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        // console.log;
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ tvshow: result }, () => {
            // ... then fetch actors in the setState callback function
            const endpoint = `${API_URL}tv/${
              this.props.match.params.tvshowId
            }/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(result => result.json())
              .then(result => {
                const crews = result.crew.filter(
                  member => member.job === "Executive Producer"
                );

                this.setState(
                  {
                    actors: result.cast,
                    crews,
                    loading: false
                  },
                  () => {
                    localStorage.setItem(
                      `${this.props.match.params.tvshowId}`,
                      JSON.stringify(this.state)
                    );
                  }
                );
              });
          });
        }
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <TvShowStyle>
        <div className="rmdb-tvshow">
          {this.state.tvshow ? (
            <div>
              <Navigation tvshow={this.props.location.tvshowName} />
              <TvShowInfo tvshow={this.state.tvshow} crews={this.state.crews} />
              <TvShowInfoBar
                popularity={this.state.tvshow.popularity}
                runtime={this.state.tvshow.episode_run_time}
                first_air_date={this.state.tvshow.first_air_date}
              />
            </div>
          ) : null}
          {this.state.actors ? (
            <div className="rmdb-tvshow-grid">
              <FourColGrid header={"Actors"}>
                {this.state.actors.map((element, i) => {
                  return <Actor key={i} actor={element} />;
                })}
              </FourColGrid>
            </div>
          ) : null}
          {!this.state.actors && !this.state.loading ? (
            <h1>No Tv Show Found!</h1>
          ) : null}
          {this.state.loading ? <Spinner /> : null}
        </div>
      </TvShowStyle>
    );
  }
}

export default TvShow;
