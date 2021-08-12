import React, { useState, useEffect } from 'react';

function Example(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
    document.title = {count};
    });

    return(
        <div>
            <p>You have pressed {count} times</p>
            <button onClick={() => setCount(count+1)}>Click</button>   
        </div>
    );
}