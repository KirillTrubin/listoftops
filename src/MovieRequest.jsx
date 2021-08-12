import React, { useState, useEffect } from 'react';
import './ListStyle.css';
import ReactDOM from 'react';
import SaveToLS from './SaveObj';
import DeleteFromLS from './DeleteObj';
import ShowMovies from './ShowMovieList.js';
import AddFavourite from './AddFavourites';

export default function ListOfTop20(){
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [favs, setFavs] = useState([]);

    const TOKEN = '345afb1e-d1ea-4de9-80fd-9363d0200b32';

    function AddFavMov(movie){
        const newFavList = [...favs, movie];
        setFavs(newFavList);
    }

    useEffect(() => 
    {
        fetch(`https://www.myapifilms.com/imdb/top?start=1&end=20&token=${TOKEN}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
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
            <div className='ListOfTops'>
                <ShowMovies movies={items} handleFavsClick={AddFavMov} favComp={AddFavourite}/>
            </div>            
        );
    }
}