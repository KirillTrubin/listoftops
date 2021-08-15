import React, { useState, useEffect } from 'react';
import ShowMovies from './ShowMovieList.js';
import AddFavorite from './AddFavorites';
import RemoveFavorite from './DeleteObj';
import Diagram from './Diagram';
import './ListStyle.css';

const TOKEN = '345afb1e-d1ea-4de9-80fd-9363d0200b32';
const URL = `https://www.myapifilms.com/imdb/top?start=1&end=20&token=${TOKEN}`;

export default function ListOfTop20(){
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [favs, setFavs] = useState([]);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites', JSON.stringify(items))
    };

    function addFavMov(movie){
        const newFavList = [...favs, movie.idIMDB];
        setFavs(newFavList);
        saveToLocalStorage(newFavList);
    }

    function removeFavMov(movie){
        const newFavList = favs.filter(
            (fav) => fav !== movie.idIMDB
        );
        setFavs(newFavList);
        saveToLocalStorage(newFavList);
    }

    useEffect (() => {
        const MovieFavs = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavs(MovieFavs);
    }, []);

    useEffect(() => 
    {
        setIsLoading(true);
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setItems(result.data.movies);
                },
                (error) => {
                    setIsLoading(false);
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
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

        return(
        <>
            <div className='ListOfTops'>
                <ShowMovies movies={items} handleFavsClick={addFavMov} showAdd/>
            </div>
            <div className='diagram'><Diagram movies={items}/></div>
            <div className="FavMovies">
                <h1 className='FavsHeading'>FAVORITES</h1>
                <ShowMovies movies={items.filter((item) => favs.includes(item.idIMDB))} handleFavsClick={removeFavMov} />
            </div>
        </>         
        );
    }