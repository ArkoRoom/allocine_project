import React from 'react';
import VideoListItem from '../components/VideoListItem';

const VideoList = (props) => {
    const {moviesList} = props
    return(
        <ul className="h-30">
            {
                moviesList.map(movie => {
                   return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback} />
                })
            }
        </ul>
    )

    function receiveCallback(movie) {
        props.callback(movie)
    }
}

export default VideoList;