import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoListItem = ({movie}) => {
    return(
        <div>
            <li className="list-disc">
                <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                <p>{movie.title}</p>
            </li>
        </div>
        
    )
}

export default VideoListItem;