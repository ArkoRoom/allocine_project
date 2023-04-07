import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoDetails = ({movie}) => {
    return(
        <div className='flex-1 mx-auto'>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} width='25%' />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}

export default VideoDetails;