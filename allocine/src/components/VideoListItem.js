import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const VideoListItem = (props) => {
    const movie = props.movie;
    return(
        <li className="list-disc" onClick={handleOnClick}>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} width='25%'/>
            <p className="text-xs">{movie.title}</p>
        </li>
    )

    function handleOnClick() {
        props.callback(movie)
    }
}

export default VideoListItem;