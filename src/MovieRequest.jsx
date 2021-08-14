import React, { useState, useEffect } from 'react';
import './ListStyle.css';
import ReactDOM from 'react';
import ShowMovies from './ShowMovieList.js';
import AddFavorite from './AddFavorites';
import RemoveFavorite from './DeleteObj';
import DoughnutDiag from './Diagram';

export default function ListOfTop20(){
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [favs, setFavs] = useState([]);

    const TOKEN = '345afb1e-d1ea-4de9-80fd-9363d0200b32';

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites', JSON.stringify(items))
    };

    function AddFavMov(movie){
        const newFavList = [...favs, movie];
        setFavs(newFavList);
        saveToLocalStorage(newFavList);
    }

    function RemoveFavMov(movie){
        const newFavList = favs.filter(
            (fav) => fav.urlPoster !== movie.urlPoster
        );
        setFavs(newFavList);
        saveToLocalStorage(newFavList);
    }

    useEffect (() => {
        const MovieFavs = JSON.parse(localStorage.getItem('favourites'));
        setFavs(MovieFavs);
    }, []);

    useEffect(() => 
    {
        fetch(`https://www.myapifilms.com/imdb/top?start=1&end=20&token=${TOKEN}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data.movies);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }  
            )
    }, [])
    if (error){
        const message = "Error";
        return(
            <div>{error.message}</div>
        )
    }
    else{
        return(
        <>
            <div className='ListOfTops'>
                <ShowMovies movies={items} handleFavsClick={AddFavMov} favComp={AddFavorite}/>
            </div>
            <div class='diagram'>
                <DoughnutDiag />
            </div>
            <div class="FavMovies">
                <h1 class='FavsHeading'>FAVORITES</h1>
                <ShowMovies movies={favs} handleFavsClick={RemoveFavMov} favComp={RemoveFavorite}/>
            </div>
        </>         
        );
    }
}