import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import VideoList from './VideoList';
import VideoDetails from '../components/VideoDetails';

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=2195faaed2128378c827a0ab3d051f06"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: {},
            currentMovie: {}
        }
    }

    componentDidMount() {
        this.initMovies();
        this.applyVideoToCurrentMovie();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response) => {
            this.setState({movieList: response.data.results, currentMovie: response.data.results[0]}, () => {
                this.applyVideoToCurrentMovie();
            });
        });
    }

    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`).then((response) => {
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({currentMovie: newCurrentMovieState})
        });
    }

    onClickListItem(movie) {
        this.setState({currentMovie: movie}, () => {
            this.applyVideoToCurrentMovie();
        })
    }

    setRecommandations() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommandations?${API_KEY}&language=fr`).then((response) => {
            this.setState({movieList: response.data.results.slice(0, 5)})
        })
    }

    onClickSearch(searchText) {
        if(searchText) {
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then((response) => {
                if(response.data && response.data.results[0]) {
                    if(response.data.results[0].id !== this.state.currentMovie.id) {
                        this.setState({currentMovie: response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie()
                            this.setRecommandations()
                        })
                    }
                }
            })
        }
        
    }

    render() {
        return(
            <div className="container lg mx-auto h-full">
                <SearchBar callback={this.onClickSearch.bind(this)} />
                <div className="flex">
                    <div className="flex-1 w-68">
                        <VideoDetails movie={this.state.currentMovie} />
                    </div>
                    <div className="flex-initial w-32">
                        <h3>Films recommandés : </h3>
                        {this.state.movieList.length > 0 ? <VideoList moviesList={this.state.movieList} callback={this.onClickListItem.bind(this)} /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesContainer;