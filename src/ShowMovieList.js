import React from 'react';
import RemoveFav from './DeleteObj';
import AddFavorite from './AddFavorites';

export default function ShowMovies(props){
    
    return(
        <>
        {props.movies.map((movie) => (
            <div className='FilmCard' key={movie.idIMDB}>
                <div className='FilmContainer'>
                    <img src={movie.urlPoster}></img>
                    <div>{movie.title}</div>
                    <div>{movie.runtime}</div>
                    <div>{movie.year}</div>
                </div>
                <div className='Star' onClick={() => props.handleFavsClick(movie)}>
                    <button className='FavBut'>{props.showAdd? <AddFavorite/> : <RemoveFav/>}</button>
                </div>
            </div>
        ))}
        </>
    );
}
