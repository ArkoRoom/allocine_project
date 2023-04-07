import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoListItem = ({movie}) => {
    return(
        <li className="list-disc">
            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} width='25%'/>
            <p className="text-xs">{movie.title}</p>
        </li>
    )
}

export default VideoListItem;