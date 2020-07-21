import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';


import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    searchTerm: ''
  }

  componentDidMount() {
    
      this.setState({ loading: true })
      const endpoint = `https://localhost:44325/api/popular`;
      this.fetchItems(endpoint);
   
  }

  searchItems = (searchTerm) => {
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === "") {
      endpoint = `https://localhost:44325/api/popular`;
    } else {
      endpoint = `https://localhost:44325/api/search?${searchTerm}`;
    }
    this.fetchItems(endpoint);
  }


  fetchItems = (endpoint) => {
    // ES6 Destructuring the state
    const { movies, heroImage, searchTerm } = this.state;

    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...movies, ...result.results],
        heroImage: heroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
    
      }
      )
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    // ES6 Destructuring the state
    const { movies, heroImage, loading, searchTerm } = this.state;

    return (
      <div className="home">
        {heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
              title={heroImage.original_title}
              text={heroImage.overview}
            />
            <SearchBar callback={this.searchItems}/>
          </div> : null }
          <div className="home-grid">
            <FourColGrid
              header={searchTerm ? 'Search Result' : 'Popular Movies'}
              loading={loading}
            >
              {movies.map( (element, i) => (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                  movieId={element.id}
                  movieName={element.original_title}
                />
              ))}
            </FourColGrid>
          </div>
      </div>
    )
  }
}

export default Home;