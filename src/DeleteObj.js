import React from 'react';
import ReactDOM from 'react';

export default function DeleteFromLS(props){
    localStorage.removeItem(props.mid, props.value);
} 