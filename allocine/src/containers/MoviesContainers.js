import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from './VideoList';
import VideoDetails from '../components/VideoDetails';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="container lg mx-auto h-full">
                <SearchBar />
                <div className="flex">
                    <div className="flex-1 w-68">
                        <VideoDetails movie={this.props.movie} />
                    </div>
                    <div className="flex-initial w-32">
                        <h3>Films recommandés : </h3>
                        {this.props.moviesList.length > 0 ? <VideoList moviesList={this.props.moviesList} callback={this.props.callback} /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesContainer;