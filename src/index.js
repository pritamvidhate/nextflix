import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';

ReactDOM.render(
  <>
  <h1 className = "heading">Netflix Series</h1>
  {Sdata.map((val) => {
    return(
      <Cards
        img = {val.imgsrc}
        title = {val.title}
        info = {val.info}
        link = {val.link}
      />
    );
  })}    
  </>,
  document.getElementById('root')
);

