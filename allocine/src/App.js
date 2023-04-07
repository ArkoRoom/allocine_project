import React, {Component} from 'react'
import MoviesContainer from "./containers/MoviesContainers";
import axios from 'axios';

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=2195faaed2128378c827a0ab3d051f06"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {},
      currentMovie: {}
    }
  }

  componentDidMount() {
    this.initMovies();
  }

  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response) => {
      this.setState({movieList: response.data.results, currentMovie: response.data.results[0]});
      console.log('AXIOS : ', response);
      console.log('MOVIE LIST : ', this.state.movieList);
      console.log('CURRENT MOVIE : ', this.state.currentMovie);
    });
  }

  render() {
    return (
      <div className="App max-h-screen">
        <MoviesContainer movie={this.state.currentMovie} moviesList={this.state.movieList} />
      </div>
    )
  }
}

export default App;
