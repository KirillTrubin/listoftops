import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

/*export default function DoughnutDiag(props){
    var ctx = document.getElementById('root').getContext('2d');
    chart.data.years = props.years;
    var chart = new chart(ctx, {
        type: 'doughnut',

        data: {
            years: ['1954', '1957', '1966', '1972', '1974','1975', '1980', '1990', '1993', '1994', 
            '1995', '1999', '2001', '2002', '2003', '2008', '2010'],
            datasets:[{
                label: "Diagram of the Best",
                backgroundColor: ['purple', 'yellow', 'orange', 'brown', 'black', 'green', 
                'violet', 'blue', 'red', 'bisque', 'grey', 'auqa', 'cadetblue', 'chocolate', 'gold', 'darkorange',
                'burlywood'],
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1] 
            }],
        },

        options: {}
    });
    return(chart);
}*/

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
        savedYears.push({title:year, value: ObjYears[year], color: 'brown'})
    }

    return(
        <PieChart
        data={savedYears}
        />
    )
}