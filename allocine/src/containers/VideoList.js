import React from 'react';
import VideoListItem from '../components/VideoListItem';

const VideoList = ({moviesList}) => {
    return(
        <ul className="h-30">
            {
                moviesList.map(movie => {
                   return <VideoListItem key={movie.id} movie={movie} />
                })
            }
        </ul>
    )
}

export default VideoList;