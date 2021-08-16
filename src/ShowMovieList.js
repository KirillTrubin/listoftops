import React from 'react';
import RemoveFav from './DeleteObj';
import AddFavorite from './AddFavorites';

export default function ShowMovies(props){
        return(
        <>
        {props.movies.map((movie) => {
        let isActive = true;

        if(props.favs){
            if(props.favs.includes(movie.idIMDB)){
                isActive = false;
            } 
        }

        return(
            <div className='FilmCard' key={movie.idIMDB}>
                <div className='FilmContainer'>
                    <img src={movie.urlPoster}></img>
                    <div>{movie.title}</div>
                    <div>{movie.runtime}</div>
                    <div>{movie.year}</div>
                </div>
                <div className='Star' onClick={() => props.handleFavsClick(movie)}>
                    <button className='FavBut'>{props.showAdd? <AddFavorite isActive={isActive} /> : <RemoveFav/>}</button>
                </div>
            </div>
        )})}
        </>
    );
}
