import React from 'react';

export default function ShowMovies(props){
    const favComp = props.favComp;
    return(
        <>
        {props.movies.map((movie, index) => (
            <div className='FilmCard'>
                <div className='FilmContainer'>
                    <img src={movie.urlPoster}></img>
                    <div>{movie.title}</div>
                    <div>{movie.runtime}</div>
                    <div></div>
                </div>
                <div className='Star' onClick={props.handleFavsClick}>{favComp}</div>
            </div>
        ))}
        </>
    );
}
