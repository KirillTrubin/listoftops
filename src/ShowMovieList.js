import React from 'react';
import AddFavorite from './AddFavorites';

export default function ShowMovies(props){
    const FavComp = props.favComp;
    return(
        <>
        {props.movies.map((movie, index) => (
            <div className='FilmCard'>
                <div className='FilmContainer'>
                    <img src={movie.urlPoster}></img>
                    <div>{movie.title}</div>
                    <div>{movie.runtime}</div>
                    <div>{movie.year}</div>
                </div>
                <div className='Star' onClick={() => props.handleFavsClick(movie)}>
                    <button className='FavBut'><FavComp /></button>
                </div>
            </div>
        ))}
        </>
    );
}
