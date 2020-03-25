import React, { Component } from "react";
import styled from "styled-components";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../config";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import FourColGrid from "./FourColGrid";
import TvShowThumb from "./TvShowThumb";
import LoadMoreBtn from "./LoadMoreBtn";
import Spinner from "./Spinner";

const HomeStyle = styled.div`
  .rmdb-home {
    margin-bottom: 100px;
  }

  .rmdb-home-grid {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

class Home extends Component {
  state = {
    tvshows: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  componentDidMount() {
    if (localStorage.getItem("HomeState")) {
      const state = JSON.parse(localStorage.getItem("HomeState"));
      this.setState({ ...state });
    } else {
             this.setState({ loading: true });
             const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
             https: this.fetchItems(endpoint);
           }
  }

  searchItems = searchTerm => {
    console.log(searchTerm);
    let endpoint = "";
    this.setState({
      tvshows: [],
      loading: true,
      searchTerm
    });

    if (searchTerm === "") {
      endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({ loading: true });

    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            tvshows: [...this.state.tvshows, ...result.results],
            heroImage: this.state.heroImage || result.results[0],
            loading: false,
            currentPage: result.page,
            totalPages: result.total_pages
          },
          () => {
            if (this.state.searchTerm === "") {
              localStorage.setItem("HomeState", JSON.stringify(this.state));
            }
          }
        );
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <HomeStyle>
        <div className="rmdb-home">
          {this.state.heroImage ? (
            <div>
              <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                  this.state.heroImage.backdrop_path
                }`}
                title={this.state.heroImage.original_title}
                text={this.state.heroImage.overview}
              />
              <SearchBar callback={this.searchItems} />
            </div>
          ) : null}
          <div className="rmdb-home-grid">
            <FourColGrid
              header={
                this.state.searchTerm ? "Search Result" : "Popular Tv Shows"
              }
              loading={this.state.loading}
            >
              {this.state.tvshows.map((element, i) => {
                return (
                  <TvShowThumb
                    key={i}
                    clickable={true}
                    image={
                      element.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                            element.poster_path
                          }`
                        : "./images/no_image.jpg"
                    }
                    tvshowId={element.id}
                    tvshowName={element.name}
                  />
                );
              })}
            </FourColGrid>
            {this.state.loading ? <Spinner /> : null}
            {this.state.currentPage <= this.state.totalPages &&
            !this.state.loading ? (
              <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            ) : null}
          </div>
        </div>
      </HomeStyle>
    );
  }
}

export default Home;
