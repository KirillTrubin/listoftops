import React from 'react';
import ReactDOM from 'react';

export default function SaveToLS(props){
    localStorage.setItem(props.mid, props.value);    
}