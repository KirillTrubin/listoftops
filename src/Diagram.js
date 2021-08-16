import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function Diagram(props){
    const years = props.movies.map((movie) => movie.year);
    const savedYears=[];
    const ObjYears = {};

    for(let year of years){
        if(ObjYears[year]){
            continue;
        }  

        let count = 0;

        for(let j=0; j<years.length-1; j++){
            if(years[j] === year){
                count++;
            }
        }
        
        ObjYears[year] = count;
    }

    for(let year in ObjYears){
        savedYears.push({title:year, value: ObjYears[year], color: 'purple'})
    }

    return(
        <PieChart
        data={savedYears}
        />
    )
}