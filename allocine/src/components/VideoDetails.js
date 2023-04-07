import React from 'react';

const BASE_URL="https://www.youtube.com/embed/"

const VideoDetails = ({movie}) => {
    return(
        <div className='flex-1 mx-auto'>
            <iframe src={`${BASE_URL}${movie.videoId}`} title='video'/>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}

export default VideoDetails;