import React from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from './VideoList';

const MoviesContainer = () => {
    return(
        <div className="container lg mx-auto">
            <SearchBar />
            <div className="flex">
                <div className="flex-1 w-68">
                    video
                </div>
                <div className="flex-initial w-32">
                    <VideoList />
                </div>
            </div>
        </div>
    )
}

export default MoviesContainer;